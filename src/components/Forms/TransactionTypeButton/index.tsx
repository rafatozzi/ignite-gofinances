import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as styles from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type: "up" | "down";
  isActive: boolean;
};

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <styles.Container isActive={isActive} type={type} {...rest}>
      <styles.Icon name={icons[type]} type={type} />
      <styles.Title>{title}</styles.Title>
    </styles.Container>
  );
}
