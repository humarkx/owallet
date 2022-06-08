import {
  Env,
  FnRequestInteraction,
  MessageSender,
  WorkerCmd,
  APP_PORT
} from '@owallet/router';
import { openPopupWindow as openPopupWindowInner } from '@owallet/popup';
import { InExtensionMessageRequester } from '../requester';

class PromiseQueue {
  protected workingOnPromise: boolean = false;
  protected queue: {
    fn: () => Promise<unknown>;
    resolve: (result: any) => void;
    reject: (e: any) => void;
  }[] = [];

  enqueue<R>(fn: () => Promise<R>): Promise<R> {
    return new Promise<R>((resolve, reject) => {
      this.queue.push({
        fn,
        resolve,
        reject
      });

      this.dequeue();
    });
  }

  protected dequeue() {
    if (this.workingOnPromise) {
      return;
    }
    const item = this.queue.shift();
    if (!item) {
      return;
    }

    this.workingOnPromise = true;
    item
      .fn()
      .then((result) => {
        item.resolve(result);
      })
      .catch((e) => {
        item.reject(e);
      })
      .finally(() => {
        this.workingOnPromise = false;
        this.dequeue();
      });
  }
}

const openPopupQueue = new PromiseQueue();

// To handle the opening popup more easily,
// just open the popup one by one.
async function openPopupWindow(
  url: string,
  channel: string = 'default'
): Promise<number> {
  return await openPopupQueue.enqueue(() => openPopupWindowInner(url, channel));
}

export class ExtensionEnv {
  static readonly assignCmd = async (
    cmd: WorkerCmd,
    params?: any
  ): Promise<any> => {
    const ret = await browser.runtime.sendMessage({ cmd, params });
    return ret;
  };

  static readonly produceEnv = (
    sender: MessageSender,
    routerMeta: Record<string, any>
  ): Env => {
    const isInternalMsg = ExtensionEnv.checkIsInternalMessage(
      sender,
      browser.runtime.id,
      browser.runtime.getURL('/')
    );

    // Add additional query string for letting the extension know it is for interaction.
    const queryString = `interaction=true&interactionInternal=${isInternalMsg}`;

    const openAndSendMsg: FnRequestInteraction = async (url, msg, options) => {
      if (url.startsWith('/')) {
        url = url.slice(1);
      }

      url = browser.runtime.getURL('/popup.html#/' + url);

      if (url.includes('?')) {
        url += '&' + queryString;
      } else {
        url += '?' + queryString;
      }

      const windowId = await openPopupWindow(url, options?.channel);
      const window = await browser.windows.get(windowId, {
        populate: true
      });

      let tabId: number;
      if (window) {
        tabId = window.tabs![0].id!;
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        let tabs = await browser.tabs.query({
          active: true
        });
        tabId = window.tabs![0].id!;
      }

      // Wait until that tab is loaded
      await (async () => {
        const tab = await browser.tabs.get(tabId);
        if (tab.status === 'complete') {
          return;
        }

        return new Promise<void>((resolve) => {
          browser.tabs.onUpdated.addListener((_tabId, changeInfo) => {
            if (tabId === _tabId && changeInfo.status === 'complete') {
              resolve();
            }
          });
        });
      })();

      return await InExtensionMessageRequester.sendMessageToTab(
        tabId,
        APP_PORT,
        msg
      );
    };

    if (!isInternalMsg) {
      // If msg is from external (probably from webpage), it opens the popup for extension and send the msg back to the tab opened.
      return {
        isInternalMsg,
        requestInteraction: openAndSendMsg
      };
    } else {
      // If msg is from the extension itself, it can send the msg back to the extension itself.
      // In this case, this expects that there is only one extension popup have been opened.
      const requestInteraction: FnRequestInteraction = async (
        url,
        msg,
        options
      ) => {
        if (options?.forceOpenWindow) {
          return await openAndSendMsg(url, msg, options);
        }

        if (url.startsWith('/')) {
          url = url.slice(1);
        }

        url = browser.runtime.getURL('/popup.html#/' + url);

        if (url.includes('?')) {
          url += '&' + queryString;
        } else {
          url += '?' + queryString;
        }

        // post message reload to popup
        await this.assignCmd('load-url', {
          tabId: sender.tab?.id,
          routerId: routerMeta.routerId,
          url
        });

        msg.routerMeta = {
          ...msg.routerMeta,
          receiverRouterId: routerMeta.routerId
        };

        return await new InExtensionMessageRequester().sendMessage(
          APP_PORT,
          msg
        );
      };

      return {
        isInternalMsg,
        requestInteraction
      };
    }
  };

  public static readonly checkIsInternalMessage = (
    sender: MessageSender,
    extensionId: string,
    extensionUrl: string
  ): boolean => {
    if (!sender.url) {
      throw new Error('Empty sender url');
    }
    const url = new URL(sender.url);
    if (!url.origin || url.origin === 'null') {
      throw new Error('Invalid sender url');
    }

    const browserURL = new URL(extensionUrl);
    if (!browserURL.origin || browserURL.origin === 'null') {
      throw new Error('Invalid browser url');
    }

    if (url.origin !== browserURL.origin) {
      return false;
    }

    return sender.id === extensionId;
  };
}
