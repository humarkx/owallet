import React, { FunctionComponent } from 'react';

import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores';

import styleDetailsTab from '../details-tab.module.scss';

import { renderAminoMessage } from '../amino';
import { Msg } from '@cosmjs/launchpad';
import { FormattedMessage, useIntl } from 'react-intl';
import { FeeButtons, GasInput, MemoInput } from '../../../components/form';
import {
  IFeeConfig,
  IFeeEthereumConfig,
  IGasConfig,
  IMemoConfig,
  SignDocHelper
} from '@owallet/hooks';
import { useLanguage } from '@owallet/common';
import { Badge, Button, Label } from 'reactstrap';
import { renderDirectMessage } from '../direct';
import { FeeInput } from '../../../components/form/fee-input';
import { GasEthereumInput } from '../../../components/form/gas-ethereum-input';

export const EthereumDetailsTab: FunctionComponent<{
  dataSign: any;
  // signDocHelper: SignDocHelper;
  memoConfig: IMemoConfig;
  feeConfig: IFeeEthereumConfig;
  gasConfig: IGasConfig;

  isInternal: boolean;

  preferNoSetFee: boolean;
  preferNoSetMemo: boolean;
}> = observer(
  ({
    dataSign,
    // signDocHelper,
    memoConfig,
    feeConfig,
    gasConfig,
    isInternal,
    preferNoSetFee,
    preferNoSetMemo
  }) => {
    const { chainStore, priceStore, accountStore } = useStore();
    const intl = useIntl();
    const language = useLanguage();

    // const mode = signDocHelper.signDocWrapper
    //   ? signDocHelper.signDocWrapper.mode
    //   : 'none';
    const mode = 'none';
    // const msgs = signDocHelper.signDocWrapper
    //   ? signDocHelper.signDocWrapper.mode === 'amino'
    //     ? signDocHelper.signDocWrapper.aminoSignDoc.msgs
    //     : signDocHelper.signDocWrapper.protoSignDoc.txMsgs
    //   : [];
    const msgs = [];

    // const renderedMsgs = (() => {
    //   if (mode === 'amino') {
    //     return (msgs as readonly Msg[]).map((msg, i) => {
    //       const msgContent = renderAminoMessage(
    //         accountStore.getAccount(chainStore.current.chainId).msgOpts,
    //         msg,
    //         chainStore.current.currencies,
    //         intl
    //       );
    //       return (
    //         <React.Fragment key={i.toString()}>
    //           <MsgRender icon={msgContent.icon} title={msgContent.title}>
    //             {msgContent.content}
    //           </MsgRender>
    //           <hr />
    //         </React.Fragment>
    //       );
    //     });
    //   } else if (mode === 'direct') {
    //     return (msgs as any[]).map((msg, i) => {
    //       const msgContent = renderDirectMessage(
    //         msg,
    //         chainStore.current.currencies,
    //         intl
    //       );
    //       return (
    //         <React.Fragment key={i.toString()}>
    //           <MsgRender icon={msgContent.icon} title={msgContent.title}>
    //             {msgContent.content}
    //           </MsgRender>
    //           <hr />
    //         </React.Fragment>
    //       );
    //     });
    //   } else {
    //     return null;
    //   }
    // })();

    return (
      <div className={styleDetailsTab.container}>
        <Label
          for="signing-messages"
          className="form-control-label"
          style={{ display: 'flex' }}
        >
          <FormattedMessage id="sign.list.messages.label" />
          <Badge className="ml-2" color="primary">
            {JSON.stringify(dataSign).length}
          </Badge>
        </Label>
        <div id="signing-messages" className={styleDetailsTab.msgContainer}>
          {/* {renderedMsgs} */}
          {JSON.stringify(dataSign, null, 2)}
        </div>
        {!preferNoSetMemo ? (
          <MemoInput
            memoConfig={memoConfig}
            label={intl.formatMessage({ id: 'sign.info.memo' })}
            rows={1}
          />
        ) : (
          <React.Fragment>
            <Label for="memo" className="form-control-label">
              <FormattedMessage id="sign.info.memo" />
            </Label>
            <div id="memo" style={{ marginBottom: '8px' }}>
              <div style={{ color: memoConfig.memo ? undefined : '#AAAAAA' }}>
                {memoConfig.memo
                  ? memoConfig.memo
                  : intl.formatMessage({ id: 'sign.info.warning.empty-memo' })}
              </div>
            </div>
          </React.Fragment>
        )}
        <GasEthereumInput
          label={intl.formatMessage({ id: 'sign.info.gas' })}
          gasConfig={gasConfig}
          defaultValue={
            parseInt(dataSign?.data?.data?.data?.estimatedGasLimit) || 0
          }
        />
        <FeeInput
          label={intl.formatMessage({ id: 'sign.info.fee' })}
          gasConfig={gasConfig}
          feeConfig={feeConfig}
          gasPrice={parseInt(dataSign?.data?.data?.data?.estimatedGasPrice, 16)}
          defaultValue={
            parseInt(dataSign?.data?.data?.data?.estimatedGasLimit, 16) * parseInt(dataSign?.data?.data?.data?.estimatedGasPrice, 16) || 0
          }
        />

        {/* {!preferNoSetFee ? (
          <FeeButtons
            feeConfig={feeConfig}
            gasConfig={gasConfig}
            priceStore={priceStore}
            label={intl.formatMessage({ id: 'sign.info.fee' })}
            gasLabel={intl.formatMessage({ id: 'sign.info.gas' })}
          />
        ) : feeConfig.fee ? (
          <React.Fragment>
            <Label for="fee-price" className="form-control-label">
              <FormattedMessage id="sign.info.fee" />
            </Label>
            <div id="fee-price">
              <div>
                {feeConfig.fee.maxDecimals(6).trim(true).toString()}
                {priceStore.calculatePrice(
                  feeConfig.fee,
                  language.fiatCurrency
                ) ? (
                  <div
                    className="ml-2"
                    style={{ display: 'inline-block', fontSize: '12px' }}
                  >
                    {priceStore
                      .calculatePrice(feeConfig.fee, language.fiatCurrency)
                      ?.toString()}
                  </div>
                ) : null}
              </div>
            </div>
            {
              !isInternal ? (
                <div style={{ fontSize: '12px' }}>
                  <Button
                    color="link"
                    size="sm"
                    style={{
                      padding: 0
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      feeConfig.setFeeType('average');
                    }}
                  >
                    <FormattedMessage id="sign.info.fee.override" />
                  </Button>
                </div>
              ) : null
            }
          </React.Fragment>
        ) : null} */}
      </div>
    );
  }
);

export const MsgRender: FunctionComponent<{
  icon?: string;
  title: string;
}> = ({ icon = 'fas fa-question', title, children }) => {
  return (
    <div className={styleDetailsTab.msg}>
      <div className={styleDetailsTab.icon}>
        <div style={{ height: '2px' }} />
        <i className={icon} />
        <div style={{ flex: 1 }} />
      </div>
      <div className={styleDetailsTab.contentContainer}>
        <div className={styleDetailsTab.contentTitle}>{title}</div>
        <div className={styleDetailsTab.content}>{children}</div>
      </div>
    </div>
  );
};
