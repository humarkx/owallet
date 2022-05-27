import { ImageSourcePropType } from 'react-native';

export const ORAIDEX_DEV_URL = 'http://192.168.0.198:3000';

export type DAppInfo = {
  name: string;
  uri: string;
  thumbnail: ImageSourcePropType;
};

export const DAppInfos: DAppInfo[] = [
  {
    name: 'Oraidex',
    thumbnail: require('../../assets/image/webpage/oraidex.png'),
    uri: __DEV__ ? ORAIDEX_DEV_URL : 'https://oraidex.io'
  },
  {
    name: 'Osmosis',
    thumbnail: require('../../assets/image/webpage/osmosis.png'),
    uri: 'https://app.osmosis.zone'
  }
];
