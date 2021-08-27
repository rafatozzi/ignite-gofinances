import React from "react";
import { TextInputProps } from "react-native";
import * as styles from "./styles";

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  return <styles.Container {...rest} />;
}
