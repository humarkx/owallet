import React, { useMemo } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { RectButton } from '../../../../components/rect-button';
import { useStore } from '../../../../stores';
import { colors, metrics, spacing, typography } from '../../../../themes';
import { _keyExtract } from '../../../../utils/helper';
import { MultiKeyStoreInfoWithSelectedElem } from '@owallet/background';

const myAccounts = [
  {
    name: 'Stephen Harris',
    image: '../../../../assets/image/address_default.png',
    address: 'orai10fa56n...14zasmp',
  },
  {
    name: 'Stephen Harris',
    image: '../../../../assets/image/address_default.png',
    address: 'orai10fa56n...14zasmp',
  },
];

const MnemonicSeed = ({ styles }) => {
  const { keyRingStore, analyticsStore, modalStore } = useStore();
  const mnemonicKeyStores = useMemo(() => {
    return keyRingStore.multiKeyStoreInfo.filter(
      (keyStore) => !keyStore.type || keyStore.type === 'mnemonic'
    );
  }, [keyRingStore.multiKeyStoreInfo]);

  const selectKeyStore = async (
    keyStore: MultiKeyStoreInfoWithSelectedElem
  ) => {
    const index = keyRingStore.multiKeyStoreInfo.indexOf(keyStore);
    if (index >= 0) {
      await keyRingStore.changeKeyRing(index);
    }
  };

  const renderItem = ({ item }) => {
    console.log({ item });
    
    return (
      <RectButton
        style={{
          ...styles.containerAccount,
        }}
        onPress={async () => {
          analyticsStore.logEvent('Account changed');
          await selectKeyStore(item);
          await modalStore.close();
        }}
      >
        <View
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              width: spacing['38'],
              height: spacing['38'],
            }}
            source={require('../../../../assets/image/address_default.png')}
            fadeDuration={0}
          />
          <View
            style={{
              justifyContent: 'space-between',
              marginLeft: spacing['12'],
            }}
          >
            <Text
              style={{
                ...typography.h6,
                color: colors['gray-900'],
                fontWeight: '900',
              }}
              numberOfLines={1}
            >
              {item.meta?.name}
            </Text>
            <Text
              style={{
                ...typography.h7,
                color: colors['gray-300'],
                fontWeight: '800',
                fontSize: 12,
              }}
            >
              {item.address}
            </Text>
          </View>
        </View>

        <View>
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: spacing['32'],
              backgroundColor:
                colors[`${item.selected ? 'purple-700' : 'gray-100'}`],
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                width: 12,
                height: 12,
                borderRadius: spacing['32'],
                backgroundColor: colors['white'],
              }}
            />
          </View>
        </View>
      </RectButton>
    );
  };
  return (
    <View
      style={{
        width: metrics.screenWidth - 36,
        height: metrics.screenHeight / 4,
      }}
    >
      <FlatList
        data={mnemonicKeyStores}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={_keyExtract}
        ListFooterComponent={() => (
          <View
            style={{
              height: spacing['16'],
            }}
          />
        )}
      />
    </View>
  );
};

export default MnemonicSeed;
