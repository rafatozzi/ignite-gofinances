import React from "react";
import * as styles from "./styles";

type Category = {
  key: string;
  name: string;
  icon: string;
};

export type TransactionCardProps = {
  type: "positive" | "negative";
  title: string;
  amount: string;
  category: Category;
  date: string;
};

type DataProps = {
  data: TransactionCardProps;
};

export function TransactionCard({ data }: DataProps) {
  return (
    <styles.Container>
      <styles.Title>{data.title}</styles.Title>
      <styles.Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </styles.Amount>

      <styles.Footer>
        <styles.Category>
          <styles.Icon name={data.category.icon} />
          <styles.CategoryName>{data.category.name}</styles.CategoryName>
        </styles.Category>
        <styles.Data>{data.date}</styles.Data>
      </styles.Footer>
    </styles.Container>
  );
}
