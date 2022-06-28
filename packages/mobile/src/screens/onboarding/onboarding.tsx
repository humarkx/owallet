import { observer } from 'mobx-react-lite';
import { GatewayIntroScreen } from './gateway_intro';
import { WelcomeIntroScreen } from './welcome_intro';
import { ManageIntroScreen } from './manage_intro';

import { FunctionComponent } from 'react';
export const OnboardingIntroScreen: FunctionComponent = observer(() => {
  return <>
    <GatewayIntroScreen />
    <WelcomeIntroScreen />
    <ManageIntroScreen />
  </>;
});
