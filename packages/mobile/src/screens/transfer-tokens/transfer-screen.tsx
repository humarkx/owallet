import { observer } from 'mobx-react-lite';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { CText as Text } from '../../components/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, CardBody } from '../../components/card';
import { colors, spacing } from '../../themes';
import TransferTokensHeader from './transfer-header';
import TransferTokensOptions from './transfer-options';
import TransferViewBtn from './transfer-view-btn';

const styles = StyleSheet.create({
  sendTokenCard: {
    borderRadius: spacing['24'],
    padding: spacing['12']
  }
});

const TransferTokensScreen: FunctionComponent<{
  containerStyle?: ViewStyle;
}> = observer(({ containerStyle }) => {
  return (
    <SafeAreaView style={[containerStyle]}>
      {/* <TransferTokensHeader /> */}
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 24,
            marginBottom: 16
          }}
        >
          Transfer
        </Text>
      </View>
      <Card
        style={{
          ...styles.sendTokenCard,
          backgroundColor: colors['white']
        }}
      >
        <CardBody>
          <TransferTokensOptions />
          <TransferViewBtn />
        </CardBody>
      </Card>
    </SafeAreaView>
  );
});

export default TransferTokensScreen;
