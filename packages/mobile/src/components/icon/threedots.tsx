import React, { FunctionComponent } from 'react';
import Svg, {  Circle } from 'react-native-svg';

export const ThreeDotsIcon: FunctionComponent<{
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
      <Circle cx="12" cy="4" r="2" fill={color} />
      <Circle cx="12" cy="12" r="2" fill={color} />
      <Circle cx="12" cy="20" r="2" fill={color} />
    </Svg>
  );
};
