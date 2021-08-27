import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as styles from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <styles.Container {...rest}>
      <styles.Title>{title}</styles.Title>
    </styles.Container>
  );
}
