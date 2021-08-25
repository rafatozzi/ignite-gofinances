import React from "react";

import * as styles from "./styles";

export function Dashboard() {
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
        </styles.UserWrapper>
      </styles.Header>
    </styles.Container>
  );
}
