import React, { FunctionComponent, useEffect, useState } from 'react';
// import { PageWithScrollViewInBottomTabView } from "../../components/page";
import {
  Image,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useStyle } from '../../styles';
import { TextInput } from '../../components/input';
// import { Button } from "../../components/button";
import { useSmartNavigation } from '../../navigation.provider';
// import { PageWithScrollView } from "../../components/page";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/core';
import {
  BrowserSectionTitle,
  BrowserSectionModal,
} from './components/section-title';
import {
  SearchIcon,
  RightArrowIcon,
  HomeIcon,
  ThreeDotsIcon,
  TabIcon,
} from '../../components/icon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { checkValidDomain } from '../../utils/helper';
import { useStore } from '../../stores';
import { DAppInfos, InjectedProviderUrl } from './config';

export const BrowserSection: FunctionComponent<{}> = ({}) => {
  const style = useStyle();
  const navigation = useNavigation();
  return (
    <React.Fragment>
      <View
        style={style.flatten([
          'width-full',
          'height-66',
          'flex-row',
          'justify-between',
          'items-center',
          'padding-20',
        ])}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: '#1C1C1E',
          }}
        >
          Bookmarks
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#4334F1',
          }}
          onPress={() => navigation.navigate('BookMarks')}
        >
          View all
        </Text>
      </View>
      <View
        style={style.flatten([
          'height-1',
          'margin-x-20',
          'background-color-border-white',
        ])}
      />
    </React.Fragment>
  );
};

export const Browser: FunctionComponent<any> = (props) => {
  const style = useStyle();
  const smartNavigation = useSmartNavigation();
  const [isOpenSetting, setIsOpenSetting] = useState(false);
  const navigation = useNavigation();
  const { deepLinkUriStore } = useStore();
  const arrayIcon = ['back', 'next', 'tabs', 'home', 'settings'];
  const renderIcon = (type, tabNum = 0) => {
    switch (type) {
      case 'back':
        return (
          <RightArrowIcon
            onPress={() => onPress(type)}
            type={'left'}
            color={'white'}
            height={18}
          />
        );
      case 'next':
        return (
          <RightArrowIcon
            onPress={() => onPress(type)}
            type={'right'}
            color={'white'}
            height={18}
          />
        );
      case 'tabs':
        return (
          <TabIcon onPress={() => onPress(type)} color={'white'} size={24} />
        );
      case 'home':
        return (
          <HomeIcon onPress={() => onPress(type)} color={'white'} size={18} />
        );
      case 'settings':
        return (
          <ThreeDotsIcon
            onPress={() => onPress(type)}
            color={'white'}
            size={18}
          />
        );
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

  useEffect(() => {
    const deepLinkUri =
      props?.route?.params?.path || deepLinkUriStore.getDeepLink();
    if (deepLinkUri) {
      updateScreen(deepLinkUri);
    }
  }, []);

  const updateScreen = async (uri) => {
    if (uri) {
      deepLinkUriStore.updateDeepLink('');
      smartNavigation.pushSmart('Web.dApp', {
        name: 'Browser',
        uri: decodeURIComponent(uri) || 'https://oraidex.io',
      });
    }
  };

  const [url, setUrl] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      if (checkValidDomain(props?.route?.params?.url?.toLowerCase())) {
        smartNavigation.pushSmart('Web.dApp', {
          name: 'Browser',
          uri:
            props.route.params.url?.toLowerCase().indexOf('http') >= 0
              ? props.route.params.url?.toLowerCase()
              : 'https://' + props.route.params?.url?.toLowerCase(),
        });
      }
    }, 1000);
  }, [props, smartNavigation, url]);

  const onHandleUrl = () => {
    if (checkValidDomain(url?.toLowerCase())) {
      smartNavigation.pushSmart('Web.dApp', {
        name: 'Browser',
        uri:
          url?.toLowerCase().indexOf('http') >= 0
            ? url?.toLowerCase()
            : 'https://' + url?.toLowerCase(),
      });
    } else {
      let uri = `https://www.google.com/search?q=${url ?? ''}`;
      if (InjectedProviderUrl) uri = InjectedProviderUrl;
      smartNavigation.pushSmart('Web.dApp', {
        name: 'Google',
        // uri: `https://staging.oraidex.io/ethereum`,
        uri,
      });
    }
  };

  const handleClickUri = (uri: string, name: string) => {
    smartNavigation.pushSmart('Web.dApp', {
      name,
      uri,
    });
  };

  const onPress = (type: any) => {
    try {
      switch (type) {
        case 'settings':
          return setIsOpenSetting(!isOpenSetting);
        case 'back':
          return smartNavigation.goBack();
        case 'next':
          return;
        case 'tabs':
          return;
        case 'home':
          return smartNavigation.navigateSmart('Home', {});
      }
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback
      style={style.flatten(['flex-column', 'justify-between', 'height-full'])}
      onPress={() => {
        if (isKeyboardVisible) Keyboard.dismiss();
      }}
    >
      <View>
        <View style={{ opacity: isOpenSetting ? 0.8 : 1 }}>
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
              placeholder={'Search website'}
              placeholderTextColor={'#AEAEB2'}
              onSubmitEditing={onHandleUrl}
              value={url}
              onChangeText={(txt) => setUrl(txt.toLowerCase())}
              inputRight={
                <TouchableOpacity onPress={onHandleUrl}>
                  <SearchIcon color={'gray'} size={20} />
                </TouchableOpacity>
              }
            />
          </View>
          <View
            style={style.flatten([
              'height-full',
              'background-color-white',
              'margin-y-64',
            ])}
          >
            <BrowserSection />
            <View style={style.flatten(['height-full', 'padding-20'])}>
              {DAppInfos.map(({ logo, uri, name }) => (
                <TouchableOpacity
                  style={style.flatten([
                    'height-44',
                    'margin-bottom-15',
                    'flex-row',
                  ])}
                  onPress={() => handleClickUri(uri, name)}
                >
                  <View style={style.flatten(['padding-top-5'])}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                      }}
                      source={logo}
                      fadeDuration={0}
                    />
                  </View>
                  <View style={style.flatten(['padding-x-15'])}>
                    <Text style={style.flatten(['subtitle2'])}>{name}</Text>
                    <Text style={{ color: '#636366', fontSize: 14 }}>
                      {uri}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        {isOpenSetting && (
          <View
            style={{
              backgroundColor: '#132340',
              height: 200,
              width: 200,
              position: 'absolute',
              right: 0,
              bottom: 80,
              borderRadius: 4,
              zIndex: 1,
              padding: 10,
            }}
          >
            <BrowserSectionModal
              onClose={() => setIsOpenSetting(false)}
              title="Setting"
            />
          </View>
        )}

        {/* <View
        style={style.flatten([
          "width-full",
          "height-80",
          "background-color-text-black-high",
          "flex-row",
          "items-center",
          "padding-40",
        ])}
      >
        {arrayIcon.map((e, i) => {
          return (
            <View key={i} style={{ width: "24%" }}>
              {renderIcon(e)}
            </View>
          );
        })}
      </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
};
