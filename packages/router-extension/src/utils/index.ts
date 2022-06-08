let owalletExtensionRouterId = null;

export function getOWalletExtensionRouterId(): number {
  if (owalletExtensionRouterId == null) {
    owalletExtensionRouterId = Math.floor(Math.random() * 1000000);
  }
  return owalletExtensionRouterId;
}
