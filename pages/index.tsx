import React from "react";
import {AccountPageLayout} from "../src/components/layouts/accountPageLayout/accountPageLayout";
import {UserDataInfoComponent} from "../src/components/userData/userDataInfo/userDataInfo.component";

const Home = () => {
  return (
      <AccountPageLayout>
          <UserDataInfoComponent/>
      </AccountPageLayout>
  )
};

export default Home;
