import React from "react";
import * as styles from "./styles";

type Props = {
  title: string;
};

export function CategorySelect({ title }: Props) {
  return (
    <styles.Container>
      <styles.Category>{title}</styles.Category>
      <styles.Icon name="chevron-down" />
    </styles.Container>
  );
}
