import { ExtensionEnv } from '../env';

export async function getOWalletExtensionRouterId(): Promise<number> {
  if (typeof window === 'undefined') {
    return ExtensionEnv.assignCmd('get-router-id');
  }

  if (window.owalletExtensionRouterId == null) {
    window.owalletExtensionRouterId = Math.floor(Math.random() * 1000000);
  }
  return window.owalletExtensionRouterId;
}
