import React from "react";
import * as styles from "./styles";

type Props = {
  title: string;
  amount: string;
  lastTransaction: string;
  type: "up" | "down" | "total";
};

export function HightlightCard({
  title,
  amount,
  lastTransaction,
  type,
}: Props) {
  const icon = {
    up: "arrow-up-circle",
    down: "arrow-down-circle",
    total: "dollar-sign",
  };

  return (
    <styles.Container type={type}>
      <styles.Header>
        <styles.Title>{title}</styles.Title>
        <styles.Icon name={icon[type]} type={type} />
      </styles.Header>

      <styles.Footer>
        <styles.Amount type={type}>{amount}</styles.Amount>
        <styles.LastTransaction type={type}>
          {lastTransaction}
        </styles.LastTransaction>
      </styles.Footer>
    </styles.Container>
  );
}
