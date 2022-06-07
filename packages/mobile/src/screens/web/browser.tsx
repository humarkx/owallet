import React, { FunctionComponent, useEffect, useState } from 'react';
// import { PageWithScrollViewInBottomTabView } from "../../components/page";

import { StyleSheet, View, Image, Text } from 'react-native';
import { useStyle } from '../../styles';
import { TextInput } from '../../components/input';
import { Button } from '../../components/button';
import { useSmartNavigation } from '../../navigation';
import isValidDomain from 'is-valid-domain';
import { PageWithScrollView } from '../../components/page';
import { useNavigation } from '@react-navigation/core';
import { BrowserSectionTitle } from './components/section-title';
import {
  SearchIcon,
  RightArrowIcon,
  HomeIcon,
  ThreeDotsIcon,
  TabIcon,
} from '../../components/icon';

export const Browser: FunctionComponent = () => {
  const style = useStyle();
  const smartNavigation = useSmartNavigation();

  const navigation = useNavigation();
  const arrayIcon = ['back', 'next', 'tabs', 'home', 'settings'];
  const renderIcon = (type, tabNum = 0) => {
    switch (type) {
      case 'back':
        return <RightArrowIcon type={'left'} color={'white'} height={18} />;
      case 'next':
        return <RightArrowIcon type={'right'} color={'white'} height={18} />;
      case 'tabs':
        return <TabIcon color={'white'} size={24} />;
      case 'home':
        return <HomeIcon color={'white'} size={18} />;
      case 'settings':
        return <ThreeDotsIcon color={'white'} size={18} />;
    }
  };
  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
    return () =>
      navigation
        .getParent()
        ?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
  }, [navigation]);

  const [url, setUrl] = useState('');

  const onHandleUrl = () => {
    if (isValidDomain(url?.toLowerCase())) {
      smartNavigation.pushSmart('Web.dApp', {
        name: 'Browser',
        uri: url,
      });
      return;
    } else {
      smartNavigation.pushSmart('Web.dApp', {
        name: 'Google',
        uri: `https://www.google.com/search?q=${url ?? ''}`,
      });
    }
  };

  return (
    <View
      style={style.flatten(['flex-column', 'justify-between', 'height-full'])}
    >
      <View>
        <BrowserSectionTitle title="Browser" />
        <View style={{ height: 260 }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            fadeDuration={0}
            resizeMode="stretch"
            source={require('../../assets/image/background.png')}
          />
          <TextInput
            containerStyle={{
              width: '100%',
              padding: 20,
              marginTop: -50,
            }}
            inputStyle={style.flatten([
              'flex-row',
              'items-center',
              'background-color-white',
              'padding-20',
              'border-radius-16',
              'border-width-4',
              'border-color-border-pink',
            ])}
            returnKeyType={'next'}
            onSubmitEditing={onHandleUrl}
            onChangeText={(txt) => setUrl(txt.toLowerCase())}
            inputRight={
              <SearchIcon onPress={onHandleUrl} color={'gray'} size={20} />
            }
          />
        </View>
      </View>
      <View
        style={style.flatten([
          'width-full',
          'height-80',
          'background-color-text-black-high',
          'flex-row',
          'items-center',
          'padding-40',
        ])}
      >
        {arrayIcon.map((e) => {
          return <View style={{ width: '24%' }}>{renderIcon(e)}</View>;
        })}
      </View>
    </View>
  );
};
