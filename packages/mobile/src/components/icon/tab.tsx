import React, { FunctionComponent } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export const TabIcon: FunctionComponent<{
  color: string;
  size: number;
}> = ({ color, size }) => {
  return (

    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Rect
        x="2.75"
        y="2.75"
        width="18.5"
        height="18.5"
        rx="3.25"
        stroke={color}
        stroke-width="1.5"
      />
      <Path
        d="M13.208 17.328H11.864V7.728H11.832L9.8 9.44L9 8.464L12.04 6H13.208V17.328Z"
        fill={color}
      />
    </Svg>
  );
};
