import React, { FunctionComponent } from "react";
import Svg, { Path } from "react-native-svg";

export const TransactionIcon: FunctionComponent<{
  color: string;
  size?: number;
}> = ({ color, size }) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      style={{
        width: size,
        height: size,
      }}
    >
      <Path
        d="M6.72827 19.7C7.54827 18.82 8.79828 18.89 9.51828 19.85L10.5283 21.2C11.3383 22.27 12.6483 22.27 13.4583 21.2L14.4683 19.85C15.1883 18.89 16.4383 18.82 17.2583 19.7C19.0383 21.6 20.4883 20.97 20.4883 18.31V7.04C20.4883 3.01 19.5483 2 15.7683 2H8.20828C4.42828 2 3.48828 3.01 3.48828 7.04V18.3C3.49828 20.97 4.95827 21.59 6.72827 19.7Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
