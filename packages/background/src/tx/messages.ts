import { Message } from '@owallet/router';
import { ROUTE } from './constants';

// Return the tx hash
export class SendTxMsg extends Message<Uint8Array> {
  public static type() {
    return 'send-tx-to-background';
  }

  constructor(
    public readonly chainId: string,
    public readonly tx: unknown,
    public readonly mode: 'async' | 'sync' | 'block'
  ) {
    super();
  }

  validateBasic(): void {
    if (!this.chainId) {
      throw new Error('chain id is empty');
    }

    if (!this.tx) {
      throw new Error('tx is empty');
    }

    if (
      !this.mode ||
      (this.mode !== 'sync' && this.mode !== 'async' && this.mode !== 'block')
    ) {
      throw new Error('invalid mode');
    }
  }

  approveExternal(): boolean {
    return true;
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return SendTxMsg.type();
  }
}

// Return the tx hash
export class SendTxEthereumMsg extends Message<string> {
  public static type() {
    return 'send-tx-ethereum-to-background';
  }

  constructor(
    public readonly chainId: string,
    public readonly rpc: string,
    public readonly method: string,
    public readonly params: any[],
  ) {
    super();
  }

  validateBasic(): void {
    if (!this.chainId) {
      throw new Error('chain id is empty');
    }

    if (!this.method) {
      throw new Error('method is empty');
    }

    if (!this.rpc) {
      throw new Error('rpc is empty');
    }

    if (!this.params) {
      throw new Error('params is empty');
    }
  }

  approveExternal(): boolean {
    return true;
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return SendTxEthereumMsg.type();
  }
}
