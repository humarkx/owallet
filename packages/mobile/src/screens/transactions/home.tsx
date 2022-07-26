import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { CText as Text } from '../../components/text';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { TransactionSectionTitle, TransactionItem } from './components';
import { colors, metrics, spacing, typography } from '../../themes';
import { _keyExtract } from '../../utils/helper';
import { useSmartNavigation } from '../../navigation.provider';
import { PageWithScrollView } from '../../components/page';
import { useStore } from '../../stores';
import { API } from '../../common/api';

export const Transactions: FunctionComponent = () => {
  const { chainStore, accountStore } = useStore();
  const account = accountStore.getAccount(chainStore.current.chainId);
  const [index, setIndex] = useState<number>(0);
  const [data, setData] = useState([]);
  const tabBarTitle = ['Transfer', 'Receiver'];
  const smartNavigation = useSmartNavigation();
  const offset = useRef(0);
  const hasMore = useRef(true);
  const fetchData = async (isLoadMore = false) => {
    const isRecipient = index === 2;

    const res = await API.getHistory(
      {
        address: account.bech32Address,
        offset: 0,
        isRecipient
      },
      { baseURL: chainStore.current.rest }
    );

    const value = res.data?.tx_responses || [];
    const total = res?.data?.pagination?.total;
    let newData = isLoadMore ? [...data, ...value] : value;
    hasMore.current = value?.length === 10;
    offset.current = newData.length;
    if (total && offset.current === Number(total)) {
      hasMore.current = false;
    }
    setData(newData);
  };

  useEffect(() => {
    offset.current = 0;
    fetchData();
  }, [account.bech32Address, index]);

  const _renderItem = ({ item, index }) => {
    return (
      <TransactionItem
        address={account.bech32Address}
        item={item}
        key={index}
        onPress={() => smartNavigation.navigateSmart('Transactions.Detail', {})}
        containerStyle={{
          backgroundColor: colors['gray-10']
        }} // customize item transaction
      />
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors['white'],
          borderRadius: spacing['12'],
          height: 56,
          marginVertical: spacing['12'],
          marginHorizontal: spacing['24'],
          paddingHorizontal: spacing['8']
        }}
      >
        {['Transactions', 'News'].map((title: string, i: number) => (
          <TouchableOpacity
            key={i}
            style={{
              ...styles.tabSelected,
              width: (metrics.screenWidth - 60) / 2,
              alignItems: 'center',
              paddingVertical: spacing['12'],
              backgroundColor:
                index === i ? colors['purple-900'] : colors['transparent'],
              borderRadius: spacing['12']
            }}
            onPress={() => {
              setIndex(i);
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: index === i ? colors['white'] : colors['gray-300']
              }}
            >
              {title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          backgroundColor: colors['white'],
          borderRadius: spacing['24']
        }}
      >
        <View
          style={{
            marginTop: spacing['12'],
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {['All', 'Transfer', 'Receive'].map((title: string, i: number) => (
            <TouchableOpacity
              key={i}
              style={{
                ...styles.tabSelected,
                width: (metrics.screenWidth - 60) / 3,
                alignItems: 'center',
                paddingVertical: spacing['12']
              }}
              onPress={() => {
                setIndex(i);
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: index === i ? colors['gray-900'] : colors['gray-300']
                }}
              >
                {title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TransactionSectionTitle
          title={'Transfer list'}
          containerStyle={{
            paddingTop: spacing['4']
          }}
        />
        <View style={styles.transactionList}>
          <FlatList
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            keyExtractor={_keyExtract}
            data={data}
            renderItem={_renderItem}
            ListFooterComponent={<View style={{ height: spacing['12'] }} />}
            ListEmptyComponent={
              <View style={styles.transactionListEmpty}>
                <Text
                  style={{
                    ...typography.h4,
                    color: colors['gray-400']
                  }}
                >
                  {'Not found transaction'}
                </Text>
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors['gray-50'],
    marginBottom: spacing['20']
  },
  tabBarHeader: {
    backgroundColor: colors['white'],
    display: 'flex',
    flexDirection: 'row',
    width: metrics.screenWidth,
    justifyContent: 'space-around',
    height: spacing['44']
  },
  tabText: {
    ...typography.body2,
    fontWeight: 'normal'
  },
  tabSelected: {},
  transactionList: {
    height: metrics.screenHeight / 1.5
  },
  transactionListEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.screenHeight / 4
  }
});
