import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useStore } from '../../stores';
import styleAsset from './asset.module.scss';

const AmountOraiN = () => {
  const { chainStore, accountStore, queriesStore } = useStore();
  const current = chainStore.current;
  const queries = queriesStore.get(current.chainId);

  const accountInfo = accountStore.getAccount(current.chainId);
  const balanceStakableQuery = queries.queryBalances.getQueryBech32Address(
    accountInfo.bech32Address
  ).stakable;

  const delegated = queries.cosmos.queryDelegations
    .getQueryBech32Address(accountInfo.bech32Address)
    .total.upperCase(true);

  const unbonding = queries.cosmos.queryUnbondingDelegations
    .getQueryBech32Address(accountInfo.bech32Address)
    .total.upperCase(true);

  const stakable = balanceStakableQuery.balance;
  const stakedSum = delegated.add(unbonding);

  return (
    <div className={styleAsset.amountOrainWrap}>
      <div className={styleAsset.legend}>
        <div className={styleAsset.label}>
          {/* <span className="badge-dot badge badge-secondary">
            <i className="bg-primary" />
          </span> */}
          <FormattedMessage id="main.account.chart.available-balance" />
        </div>
        <div style={{ minWidth: '16px' }} />
        <div className={styleAsset.value}>
          {stakable.shrink(true).maxDecimals(6).toString()}
        </div>
      </div>
      {/* <div className={styleAsset.legend}>
        <div className={styleAsset.label} style={{ color: '#11cdef' }}>
          <span className="badge-dot badge badge-secondary">
            <i className="bg-info" />
          </span>
          <FormattedMessage id="main.account.chart.staked-balance" />
        </div>
        <div style={{ minWidth: '16px' }} />
        <div
          className={styleAsset.value}
          style={{
            color: '#D6CCF4'
          }}
        >
          {stakedSum.shrink(true).maxDecimals(6).toString()}
        </div>
      </div> */}
    </div>
  );
};

export default AmountOraiN;
