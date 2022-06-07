import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

export const SearchIcon: FunctionComponent<{
  color: string;
  size: number;
  onPress?: () => void;
}> = ({ color, size, onPress }) => {
  return (
    <Svg
      onPress={onPress}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
    >
      <Path
        stroke={color}
        d="M9.58317 18.125C4.87484 18.125 1.0415 14.2916 1.0415 9.58329C1.0415 4.87496 4.87484 1.04163 9.58317 1.04163C14.2915 1.04163 18.1248 4.87496 18.1248 9.58329C18.1248 14.2916 14.2915 18.125 9.58317 18.125ZM9.58317 2.29163C5.55817 2.29163 2.2915 5.56663 2.2915 9.58329C2.2915 13.6 5.55817 16.875 9.58317 16.875C13.6082 16.875 16.8748 13.6 16.8748 9.58329C16.8748 5.56663 13.6082 2.29163 9.58317 2.29163Z"
        fill="#1C1C1E"
      />
      <Path
        stroke={color}
        d="M18.3335 18.9583C18.1752 18.9583 18.0169 18.9 17.8919 18.775L16.2252 17.1083C15.9835 16.8666 15.9835 16.4666 16.2252 16.225C16.4669 15.9833 16.8669 15.9833 17.1085 16.225L18.7752 17.8916C19.0169 18.1333 19.0169 18.5333 18.7752 18.775C18.6502 18.9 18.4919 18.9583 18.3335 18.9583Z"
        fill="#1C1C1E"
      />
    </Svg>
  );
};
