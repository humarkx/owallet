import { navigate } from '../../router/root';
const SCHEME = 'owallet://open_url?url=';
const SCHEME_ANDROID = 'app.owallet.oauth://google/open_url?url=';

export const handleDeepLink = async ({ url }) => {
  if (url) {
    const path = url.replace(SCHEME_ANDROID, '').replace(SCHEME, '');
    if (!url.indexOf(SCHEME_ANDROID)) {
      navigate('Browser', path);
    }

    if (url.indexOf(SCHEME) === 0) {
      navigate('Browser', path);
    }
  }
};
