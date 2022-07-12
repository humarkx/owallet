import React, { FunctionComponent, useEffect, useState } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { IFeeConfig, IFeeEthereumConfig, IGasEthereumConfig } from '@owallet/hooks';
import { observer } from 'mobx-react-lite';

export interface GasInputProps {
  feeConfig: IFeeEthereumConfig;
  gasConfig: IGasEthereumConfig;

  label?: string;
  className?: string;
  defaultValue?: number;
  gasPrice?: number;
}

// TODO: Handle the max block gas limit(?)
export const FeeInput: FunctionComponent<GasInputProps> = observer(
  ({ feeConfig, label, className, defaultValue, gasConfig, gasPrice }) => {
    const [inputId] = useState(() => {
      const bytes = new Uint8Array(4);
      crypto.getRandomValues(bytes);
      return `input-${Buffer.from(bytes).toString('hex')}`;
    });

    useEffect(() => {
        feeConfig.setFee(parseInt(gasConfig.gasRaw) * gasPrice);
    }, [gasConfig.gasRaw])

    return (
      <FormGroup className={className}>
        {label ? (
          <Label for={inputId} className="form-control-label">
            {label}
          </Label>
        ) : null}
        <Input
          id={inputId}
          className="form-control-alternative"
          type="number"
          step={1}
          min={0}
          value={feeConfig.feeRaw}
          onChange={(e) => {
            feeConfig.setFee(e.target.value);
            e.preventDefault();
          }}
          defaultValue={defaultValue}
          autoComplete="off"
        />
      </FormGroup>
    );
  }
);
