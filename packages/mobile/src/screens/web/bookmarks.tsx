import React, { FunctionComponent, useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { CText as Text } from '../../components/text';
import { useStyle } from '../../styles';
import { BrowserSectionTitle } from './components/section-title';
import { RemoveIcon } from '../../components/icon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useStore } from '../../stores';
import { observer } from 'mobx-react-lite';
import { PageWithScrollView } from '../../components/page';

export const BrowserSection: FunctionComponent<{}> = ({}) => {
  const style = useStyle();
  return (
    <>
      <View
        style={style.flatten([
          'width-full',
          'height-66',
          'flex-row',
          'justify-between',
          'items-center',
          'padding-20'
        ])}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: '#1C1C1E'
          }}
        >
          Bookmarks
        </Text>
      </View>
      <View
        style={style.flatten([
          'height-1',
          'margin-x-20',
          'background-color-border-white'
        ])}
      />
    </>
  );
};

export const BookMarks: FunctionComponent<any> = observer(() => {
  const style = useStyle();
  const { browserStore } = useStore();
  const [isOpenSetting] = useState(false);

  const removeBookmark = (bm) => {
    browserStore.removeBoorkmark(bm);
  };

  return (
    <PageWithScrollView>
      <View style={{ opacity: isOpenSetting ? 0.8 : 1 }}>
        <BrowserSectionTitle title="All bookmarks" />
        <View
          style={style.flatten([
            'height-full',
            'background-color-white',
            'margin-y-24'
          ])}
        >
          <BrowserSection />
          <View style={style.flatten(['height-full', 'padding-20'])}>
            {browserStore.getBookmarks?.map((e) => (
              <TouchableOpacity
                style={style.flatten([
                  'height-44',
                  'margin-bottom-20',
                  'flex-row',
                  'items-center',
                  'justify-between'
                ])}
              >
                <View style={style.flatten(['flex-row'])}>
                  <View style={style.flatten(['padding-top-5'])}>
                    <Image
                      style={{
                        width: 20,
                        height: 22
                      }}
                      source={e.logo}
                      fadeDuration={0}
                    />
                  </View>
                  <View style={style.flatten(['padding-x-15'])}>
                    <Text style={style.flatten(['subtitle2'])}>{e.name}</Text>
                    <Text style={{ color: '#636366', fontSize: 14 }}>
                      {e.uri}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => removeBookmark(e)}>
                  <RemoveIcon />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </PageWithScrollView>
  );
});
