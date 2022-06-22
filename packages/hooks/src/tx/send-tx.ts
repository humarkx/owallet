import {
  ChainGetter,
  CosmosMsgOpts,
  CosmwasmMsgOpts,
  SecretMsgOpts
} from '@owallet/stores';
import { ObservableQueryBalances, ObservableQueryEvmBalance } from '@owallet/stores';
import { useFeeConfig, useMemoConfig, useRecipientConfig } from './index';
import { useSendGasConfig } from './send-gas';
import { useAmountConfig } from './amount';

type MsgOpts = CosmosMsgOpts & SecretMsgOpts & CosmwasmMsgOpts;

export const useSendTxConfig = (
  chainGetter: ChainGetter,
  chainId: string,
  sendMsgOpts: MsgOpts['send'],
  sender: string,
  queryBalances: ObservableQueryBalances,
  ensEndpoint?: string,
  queryEvmBalances?: ObservableQueryEvmBalance,
  senderEvm?: string,
) => {
  const amountConfig = useAmountConfig(
    chainGetter,
    chainId,
    sender,
    queryBalances,
    queryEvmBalances,
    senderEvm,
  );

  const memoConfig = useMemoConfig(chainGetter, chainId);
  const gasConfig = useSendGasConfig(
    chainGetter,
    chainId,
    amountConfig,
    sendMsgOpts
  );
  const feeConfig = useFeeConfig(
    chainGetter,
    chainId,
    sender,
    queryBalances,
    amountConfig,
    gasConfig,
    true,
    queryEvmBalances,
    senderEvm,
  );
  // Due to the circular references between the amount config and gas/fee configs,
  // set the fee config of the amount config after initing the gas/fee configs.
  amountConfig.setFeeConfig(feeConfig);

  const recipientConfig = useRecipientConfig(chainGetter, chainId, ensEndpoint);

  return {
    amountConfig,
    memoConfig,
    gasConfig,
    feeConfig,
    recipientConfig
  };
};
