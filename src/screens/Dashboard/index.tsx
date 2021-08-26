import React from "react";
import { HightlightCard } from "../../components/HightlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import * as styles from "./styles";

export type DataListProps = TransactionCardProps & {
  id: string;
};

export function Dashboard() {
  const transactionlist: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de Site",
      amount: "R$ 12.000,00",
      date: "13/04/2021",
      category: {
        key: "1",
        name: "Vendas",
        icon: "dollar-sign",
      },
    },
  ];

  return (
    <styles.Container>
      <styles.Header>
        <styles.UserWrapper>
          <styles.UserInfo>
            <styles.Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/44178301?v=4",
              }}
            />
            <styles.User>
              <styles.UserGreeting>Olá,</styles.UserGreeting>
              <styles.UserName>Rafael</styles.UserName>
            </styles.User>
          </styles.UserInfo>

          <styles.Icon name="power" />
        </styles.UserWrapper>
      </styles.Header>

      <styles.HightlightCards>
        <HightlightCard
          title="Entrada"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        />
      </styles.HightlightCards>

      <styles.Transactions>
        <styles.Title>Listagem</styles.Title>

        <styles.TransactionList
          data={transactionlist}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </styles.Transactions>
    </styles.Container>
  );
}
