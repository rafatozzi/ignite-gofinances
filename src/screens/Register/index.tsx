import React, { useState } from "react";
import * as styles from "./styles";

import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { TransactionTypeButton } from "../../components/Forms/TransactionTypeButton";
import { CategorySelect } from "../../components/Forms/CategorySelect";

export function Register() {
  const [transactionType, setTransactionType] = useState("");

  const handleTransactionType = (type: "up" | "down") => {
    setTransactionType(type);
  };

  return (
    <styles.Container>
      <styles.Header>
        <styles.Title>Cadastro</styles.Title>
      </styles.Header>

      <styles.Form>
        <styles.Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <styles.TransationTypes>
            <TransactionTypeButton
              title="Income"
              type="up"
              onPress={() => handleTransactionType("up")}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              title="Outcome"
              type="down"
              onPress={() => handleTransactionType("down")}
              isActive={transactionType === "down"}
            />
          </styles.TransationTypes>

          <CategorySelect title="Categoria" />
        </styles.Fields>

        <Button title="Enviar" />
      </styles.Form>
    </styles.Container>
  );
}
