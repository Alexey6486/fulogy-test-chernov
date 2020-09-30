import React from "react";
import { HeaderComponent } from "../src/components/header/header.component";
import { AppContent } from "./index.styles";
import {PageInfoComponent} from "../src/components/pageInfo/pageInfo.component";
import { Container } from "styles/global.styles";
import {UserDataComponent} from "../src/components/userData/userData.component";
import {EditDataComponent} from "../src/components/editData/editData.component";
import { BrowserRouter } from "react-router-dom";

const Home = () => {
  return (

        <AppContent>
            <Container>
                <HeaderComponent/>
                <PageInfoComponent/>
                <UserDataComponent/>
            </Container>
        </AppContent>

  )
};

export default Home;
