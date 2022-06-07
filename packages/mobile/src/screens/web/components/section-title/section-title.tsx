import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { useStyle } from '../../../../styles';

export const BrowserSectionTitle: FunctionComponent<{
  title: string;
}> = ({ title }) => {
  const style = useStyle();

  return (
    <View
      style={style.flatten([
        'padding-x-20',
        'padding-top-16',
        'padding-bottom-16',
        'background-color-white'
      ])}
    >
      <Text style={style.flatten(['h4'])}>{title}</Text>
    </View>
  );
};
