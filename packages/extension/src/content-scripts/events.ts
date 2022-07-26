import { PushEventDataMsg } from '@owallet/background';
import { Router } from '@owallet/router';

export function initEvents(router: Router) {
  router.registerMessage(PushEventDataMsg);

  router.addHandler('interaction-foreground', (_, msg) => {
    switch (msg.constructor) {
      case PushEventDataMsg:
        if ((msg as PushEventDataMsg).data.type === 'keystore-changed') {
          window.dispatchEvent(new Event('keplr_keystorechange'));
        }
        return {};
      default:
        throw new Error('Unknown msg type');
    }
  });
}
