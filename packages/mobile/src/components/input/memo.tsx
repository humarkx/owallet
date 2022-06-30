import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { IMemoConfig } from '@owallet/hooks';
import { TextStyle, ViewStyle } from 'react-native';
import { TextInput } from './input';

export const MemoInput: FunctionComponent<{
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle;
  errorLabelStyle?: TextStyle;
  placeholder?: string;
  label: string;
  placeholderTextColor?: string;
  memoConfig: IMemoConfig;
}> = observer(
  ({
    labelStyle,
    containerStyle,
    inputContainerStyle,
    errorLabelStyle,
    label,
    memoConfig,
    placeholder,
    placeholderTextColor,
  }) => {
    return (
      <TextInput
        labels={[label]}
        labelStyle={labelStyle}
        containerStyle={containerStyle}
        inputContainerStyle={inputContainerStyle}
        errorLabelStyle={errorLabelStyle}
        value={memoConfig.memo}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={(text) => {
          memoConfig.setMemo(text);
        }}
      />
    );
  }
);
