import { Message, OWalletError } from '@owallet/router';
import { ROUTE } from './constants';
import {
  KeyRing,
  KeyRingStatus,
  MultiKeyStoreInfoWithSelected,
} from './keyring';
import { BIP44HDPath, ExportKeyRingData } from './types';

import {
  Bech32Address,
  checkAndValidateADR36AminoSignDoc,
  cosmos,
} from '@owallet/cosmos';
import { BIP44, OWalletSignOptions, Key } from '@owallet/types';

import { StdSignDoc, AminoSignResponse, StdSignature } from '@cosmjs/launchpad';
import Long from 'long';

const bip39 = require('bip39');

export class RestoreKeyRingMsg extends Message<{
  status: KeyRingStatus;
  multiKeyStoreInfo: MultiKeyStoreInfoWithSelected;
}> {
  public static type() {
    return 'restore-keyring';
  }

  constructor() {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  validateBasic(): void {}

  route(): string {
    return ROUTE;
  }

  type(): string {
    return RestoreKeyRingMsg.type();
  }
}

export class DeleteKeyRingMsg extends Message<{
  status: KeyRingStatus;
  multiKeyStoreInfo: MultiKeyStoreInfoWithSelected;
}> {
  public static type() {
    return 'delete-keyring';
  }

  constructor(public readonly index: number, public readonly password: string) {
    super();
  }

  validateBasic(): void {
    if (!Number.isInteger(this.index)) {
      throw new Error('Invalid index');
    }

    if (!this.password) {
      throw new Error('password not set');
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return DeleteKeyRingMsg.type();
  }
}

export class UpdateNameKeyRingMsg extends Message<{
  multiKeyStoreInfo: MultiKeyStoreInfoWithSelected;
}> {
  public static type() {
    return 'update-name-keyring';
  }

  constructor(public readonly index: number, public readonly name: string) {
    super();
  }

  validateBasic(): void {
    if (!Number.isInteger(this.index)) {
      throw new Error('Invalid index');
    }

    if (!this.name) {
      throw new Error('name not set');
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return UpdateNameKeyRingMsg.type();
  }
}

export class ShowKeyRingMsg extends Message<string> {
  public static type() {
    return 'show-keyring';
  }

  constructor(public readonly index: number, public readonly password: string) {
    super();
  }

  validateBasic(): void {
    if (!Number.isInteger(this.index)) {
      throw new Error('Invalid index');
    }

    if (!this.password) {
      throw new Error('password not set');
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return ShowKeyRingMsg.type();
  }
}

export class CreateMnemonicKeyMsg extends Message<{
  status: KeyRingStatus;
  multiKeyStoreInfo: MultiKeyStoreInfoWithSelected;
}> {
  public static type() {
    return 'create-mnemonic-key';
  }

  constructor(
    public readonly kdf: 'scrypt' | 'sha256' | 'pbkdf2',
    public readonly mnemonic: string,
    public readonly password: string,
    public readonly meta: Record<string, string>,
    public readonly bip44HDPath: BIP44HDPath
  ) {
    super();
  }

  validateBasic(): void {
    if (
      this.kdf !== 'scrypt' &&
      this.kdf !== 'sha256' &&
      this.kdf !== 'pbkdf2'
    ) {
      throw new Error('Invalid kdf');
    }

    if (!this.mnemonic) {
      throw new Error('mnemonic not set');
    }

    if (!this.password) {
      throw new Error('password not set');
    }

    // Validate mnemonic.
    // Checksome is not validate in this method.
    // Keeper should handle the case of invalid checksome.
    try {
      bip39.mnemonicToEntropy(this.mnemonic);
    } catch (e) {
      if (e.message !== 'Invalid mnemonic checksum') {
        throw e;
      }
    }

    KeyRing.validateBIP44Path(this.bip44HDPath);
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return CreateMnemonicKeyMsg.type();
  }
}

export class AddMnemonicKeyMsg extends Message<{
  multiKeyStoreInfo: MultiKeyStoreInfoWithSelected;
}> {
  public static type() {
    return 'add-mnemonic-key';
  }

  constructor(
    public readonly kdf: 'scrypt' | 'sha256' | 'pbkdf2',
    public readonly mnemonic: string,
    public readonly meta: Record<string, string>,
    public readonly bip44HDPath: BIP44HDPath
  ) {
    super();
  }

  validateBasic(): void {
    if (
      this.kdf !== 'scrypt' &&
      this.kdf !== 'sha256' &&
      this.kdf !== 'pbkdf2'
    ) {
      throw new Error('Invalid kdf');
    }

    if (!this.mnemonic) {
      throw new Error('mnemonic not set');
    }

    // Validate mnemonic.
    // Checksome is not validate in this method.
    // Keeper should handle the case of invalid checksome.
    try {
      bip39.mnemonicToEntropy(this.mnemonic);
    } catch (e) {
      if (e.message !== 'Invalid mnemonic checksum') {
        throw e;
      }
    }

    KeyRing.validateBIP44Path(this.bip44HDPath);
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return AddMnemonicKeyMsg.type();
  }
}

export class CreatePrivateKeyMsg extends Message<{
  status: KeyRingStatus;
  multiKeyStoreInfo: MultiKeyStoreInfoWithSelected;
}> {
  public static type() {
    return 'create-private-key';
  }

  constructor(
    public readonly kdf: 'scrypt' | 'sha256' | 'pbkdf2',
    public readonly privateKey: Uint8Array,
    public readonly password: string,
    public readonly meta: Record<string, string>
  ) {
    super();
  }

  validateBasic(): void {
    if (
      this.kdf !== 'scrypt' &&
      this.kdf !== 'sha256' &&
      this.kdf !== 'pbkdf2'
    ) {
      throw new Error('Invalid kdf');
    }

    if (!this.privateKey || this.privateKey.length === 0) {
      throw new Error('private key not set');
    }

    if (this.privateKey.length !== 32) {
      throw new Error('invalid length of private key');
    }

    if (!this.password) {
      throw new Error('password not set');
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return CreatePrivateKeyMsg.type();
  }
}

export class CreateLedgerKeyMsg extends Message<{
  status: KeyRingStatus;
  multiKeyStoreInfo: MultiKeyStoreInfoWithSelected;
}> {
  public static type() {
    return 'create-ledger-key';
  }

  constructor(
    public readonly kdf: 'scrypt' | 'sha256' | 'pbkdf2',
    public readonly password: string,
    public readonly meta: Record<string, string>,
    public readonly bip44HDPath: BIP44HDPath
  ) {
    super();
  }

  validateBasic(): void {
    if (
      this.kdf !== 'scrypt' &&
      this.kdf !== 'sha256' &&
      this.kdf !== 'pbkdf2'
    ) {
      throw new Error('Invalid kdf');
    }

    if (!this.password) {
      throw new Error('password not set');
    }

    KeyRing.validateBIP44Path(this.bip44HDPath);
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return CreateLedgerKeyMsg.type();
  }
}

export class AddPrivateKeyMsg extends Message<{
  multiKeyStoreInfo: MultiKeyStoreInfoWithSelected;
}> {
  public static type() {
    return 'add-private-key';
  }

  constructor(
    public readonly kdf: 'scrypt' | 'sha256' | 'pbkdf2',
    public readonly privateKey: Uint8Array,
    public readonly meta: Record<string, string>
  ) {
    super();
  }

  validateBasic(): void {
    if (
      this.kdf !== 'scrypt' &&
      this.kdf !== 'sha256' &&
      this.kdf !== 'pbkdf2'
    ) {
      throw new Error('Invalid kdf');
    }

    if (!this.privateKey || this.privateKey.length === 0) {
      throw new Error('private key not set');
    }

    if (this.privateKey.length !== 32) {
      throw new Error('invalid length of private key');
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return AddPrivateKeyMsg.type();
  }
}

export class AddLedgerKeyMsg extends Message<{
  multiKeyStoreInfo: MultiKeyStoreInfoWithSelected;
}> {
  public static type() {
    return 'add-ledger-key';
  }

  constructor(
    public readonly kdf: 'scrypt' | 'sha256' | 'pbkdf2',
    public readonly meta: Record<string, string>,
    public readonly bip44HDPath: BIP44HDPath
  ) {
    super();
  }

  validateBasic(): void {
    if (
      this.kdf !== 'scrypt' &&
      this.kdf !== 'sha256' &&
      this.kdf !== 'pbkdf2'
    ) {
      throw new Error('Invalid kdf');
    }

    KeyRing.validateBIP44Path(this.bip44HDPath);
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return AddLedgerKeyMsg.type();
  }
}

export class LockKeyRingMsg extends Message<{ status: KeyRingStatus }> {
  public static type() {
    return 'lock-keyring';
  }

  constructor() {
    super();
  }

  validateBasic(): void {
    // noop
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return LockKeyRingMsg.type();
  }
}

export class UnlockKeyRingMsg extends Message<{ status: KeyRingStatus }> {
  public static type() {
    return 'unlock-keyring';
  }

  constructor(public readonly password = '') {
    super();
  }

  validateBasic(): void {
    if (!this.password) {
      throw new Error('password not set');
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return UnlockKeyRingMsg.type();
  }
}

export class GetKeyMsg extends Message<Key> {
  public static type() {
    return 'get-key';
  }

  constructor(public readonly chainId: string) {
    super();
  }

  validateBasic(): void {
    if (!this.chainId) {
      throw new Error('chain id not set');
    }
  }

  approveExternal(): boolean {
    return true;
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return GetKeyMsg.type();
  }
}

export class RequestSignAminoMsg extends Message<AminoSignResponse> {
  public static type() {
    return 'request-sign-amino';
  }

  constructor(
    public readonly chainId: string,
    public readonly signer: string,
    public readonly signDoc: StdSignDoc,
    public readonly signOptions: OWalletSignOptions & {
      // Hack option field to detect the sign arbitrary for string
      isADR36WithString?: boolean;
    } = {}
  ) {
    super();
  }

  validateBasic(): void {
    if (!this.chainId) {
      throw new Error('chain id not set');
    }

    if (!this.signer) {
      throw new Error('signer not set');
    }

    // Validate bech32 address.
    Bech32Address.validate(this.signer);

    // Check and validate the ADR-36 sign doc.
    // ADR-36 sign doc doesn't have the chain id
    if (!checkAndValidateADR36AminoSignDoc(this.signDoc)) {
      if (this.signDoc.chain_id !== this.chainId) {
        throw new Error(
          'Chain id in the message is not matched with the requested chain id'
        );
      }
    } else {
      if (this.signDoc.msgs[0].value.signer !== this.signer) {
        throw new Error('Unmatched signer in sign doc');
      }
    }

    if (!this.signOptions) {
      throw new Error('Sign options are null');
    }
  }

  approveExternal(): boolean {
    return true;
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return RequestSignAminoMsg.type();
  }
}

// request goes here
export class RequestSignDirectMsg extends Message<{
  readonly signed: {
    bodyBytes: Uint8Array;
    authInfoBytes: Uint8Array;
    chainId: string;
    accountNumber: string;
  };
  readonly signature: StdSignature;
}> {
  public static type() {
    return 'request-sign-direct';
  }

  constructor(
    public readonly chainId: string,
    public readonly signer: string,
    public readonly signDoc: {
      bodyBytes?: Uint8Array | null;
      authInfoBytes?: Uint8Array | null;
      chainId?: string | null;
      accountNumber?: string | null;
    },
    public readonly signOptions: OWalletSignOptions = {}
  ) {
    super();
  }

  validateBasic(): void {
    if (!this.chainId) {
      throw new Error('chain id not set');
    }

    if (!this.signer) {
      throw new Error('signer not set');
    }

    // Validate bech32 address.
    Bech32Address.validate(this.signer);

    const signDoc = cosmos.tx.v1beta1.SignDoc.create({
      bodyBytes: this.signDoc.bodyBytes,
      authInfoBytes: this.signDoc.authInfoBytes,
      chainId: this.signDoc.chainId,
      accountNumber: this.signDoc.accountNumber
        ? Long.fromString(this.signDoc.accountNumber)
        : undefined,
    });

    if (signDoc.chainId !== this.chainId) {
      throw new OWalletError(
        'keyring',
        234,
        'Chain id in the message is not matched with the requested chain id'
      );
    }

    if (!this.signOptions) {
      throw new Error('Sign options are null');
    }
  }

  approveExternal(): boolean {
    return true;
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return RequestSignDirectMsg.type();
  }
}

// request sign ethereum goes here
export class RequestSignEthereumMsg extends Message<{
  readonly rawTxHex: string; // raw tx signature to broadcast
}> {
  public static type() {
    return 'request-sign-ethereum';
  }

  constructor(
    public readonly chainId: string,
    public readonly data: object // public readonly signOptions: OWalletSignOptions = {} // public readonly signer: string,
  ) // public readonly signDoc: {
  //   bodyBytes?: Uint8Array | null;
  //   authInfoBytes?: Uint8Array | null;
  //   chainId?: string | null;
  //   accountNumber?: string | null;
  // }
  {
    super();
  }

  validateBasic(): void {
    if (!this.chainId) {
      throw new Error('chain id not set');
    }

    if (!this.data) {
      throw new Error('data not set');
    }

    // const signDoc = cosmos.tx.v1beta1.SignDoc.create({
    //   bodyBytes: this.signDoc.bodyBytes,
    //   authInfoBytes: this.signDoc.authInfoBytes,
    //   chainId: this.signDoc.chainId,
    //   accountNumber: this.signDoc.accountNumber
    //     ? Long.fromString(this.signDoc.accountNumber)
    //     : undefined,
    // });

    // if (signDoc.chainId !== this.chainId) {
    //   throw new OWalletError(
    //     'keyring',
    //     234,
    //     'Chain id in the message is not matched with the requested chain id'
    //   );
    // }

    // if (!this.signOptions) {
    //   throw new Error('Sign options are null');
    // }
  }

  approveExternal(): boolean {
    return true;
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return RequestSignEthereumMsg.type();
  }
}

export class RequestVerifyADR36AminoSignDoc extends Message<boolean> {
  public static type() {
    return 'request-verify-adr-36-amino-doc';
  }

  constructor(
    public readonly chainId: string,
    public readonly signer: string,
    public readonly data: Uint8Array,
    public readonly signature: StdSignature
  ) {
    super();
  }

  validateBasic(): void {
    if (!this.chainId) {
      throw new Error('chain id not set');
    }

    if (!this.signer) {
      throw new Error('signer not set');
    }

    if (!this.signature) {
      throw new Error('Signature not set');
    }

    // Validate bech32 address.
    Bech32Address.validate(this.signer);
  }

  approveExternal(): boolean {
    return true;
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return RequestVerifyADR36AminoSignDoc.type();
  }
}

export class GetMultiKeyStoreInfoMsg extends Message<{
  multiKeyStoreInfo: MultiKeyStoreInfoWithSelected;
}> {
  public static type() {
    return 'get-multi-key-store-info';
  }

  constructor() {
    super();
  }

  validateBasic(): void {
    // noop
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return GetMultiKeyStoreInfoMsg.type();
  }
}

export class ChangeKeyRingMsg extends Message<{
  multiKeyStoreInfo: MultiKeyStoreInfoWithSelected;
}> {
  public static type() {
    return 'change-keyring';
  }

  constructor(public readonly index: number) {
    super();
  }

  validateBasic(): void {
    if (this.index < 0) {
      throw new Error('Index is negative');
    }

    if (!Number.isInteger(this.index)) {
      throw new Error('Invalid index');
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return ChangeKeyRingMsg.type();
  }
}

// Return the list of selectable path.
// If coin type was set for the key store, will return empty array.
export class GetIsKeyStoreCoinTypeSetMsg extends Message<
  {
    readonly path: BIP44;
    readonly bech32Address: string;
  }[]
> {
  public static type() {
    return 'get-is-keystore-coin-type-set';
  }

  constructor(public readonly chainId: string, public readonly paths: BIP44[]) {
    super();
  }

  validateBasic(): void {
    if (!this.chainId) {
      throw new Error('chain id not set');
    }

    if (this.paths.length === 0) {
      throw new Error('empty bip44 path list');
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return GetIsKeyStoreCoinTypeSetMsg.type();
  }
}

export class SetKeyStoreCoinTypeMsg extends Message<KeyRingStatus> {
  public static type() {
    return 'set-keystore-coin-type';
  }

  constructor(
    public readonly chainId: string,
    public readonly coinType: number
  ) {
    super();
  }

  validateBasic(): void {
    if (!this.chainId) {
      throw new Error('chain id not set');
    }

    if (this.coinType < 0) {
      throw new Error('coin type can not be negative');
    }

    if (!Number.isInteger(this.coinType)) {
      throw new Error('coin type should be integer');
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return SetKeyStoreCoinTypeMsg.type();
  }
}

export class CheckPasswordMsg extends Message<boolean> {
  public static type() {
    return 'check-keyring-password';
  }

  constructor(public readonly password: string) {
    super();
  }

  validateBasic(): void {
    if (!this.password) {
      throw new Error('password not set');
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return CheckPasswordMsg.type();
  }
}

export class ExportKeyRingDatasMsg extends Message<ExportKeyRingData[]> {
  public static type() {
    return 'export-keyring-datas';
  }

  constructor(public readonly password: string) {
    super();
  }

  validateBasic(): void {
    if (!this.password) {
      throw new Error('password not set');
    }
  }

  route(): string {
    return ROUTE;
  }

  type(): string {
    return ExportKeyRingDatasMsg.type();
  }
}
