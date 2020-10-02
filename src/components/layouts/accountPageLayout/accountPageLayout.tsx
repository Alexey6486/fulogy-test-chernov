import React from "react";
import {AppContent} from "../../../../styles/index.styles";
import {Container} from "../../../../styles/global.styles";
import {HeaderComponent} from "../../header/header.component";
import {PageInfoComponent} from "../../pageInfo/pageInfo.component";
import {UserDataComponent} from "../../userData/userData.component";
import Head from "next/head";

export const AccountPageLayout = ({children}) => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/static/favicon.ico"/>
            </Head>
            <AppContent>
                <Container>
                    <HeaderComponent/>
                    <PageInfoComponent/>
                    <UserDataComponent/>
                    {children}
                </Container>
            </AppContent>
        </>
    )
};
