import React from "react";
import { BreadcrumbsComponent } from "../breadcrumbs/breadcrumbs.component";
import {PageInfo, PageTitle} from "./pageInfo.styles";

export const PageInfoComponent = () => {

    const pagesArr = ['Главная', 'Личный кабинет']

    return (
        <PageInfo>
            <PageTitle>
                ЛИЧНЫЙ ПРОФИЛЬ
            </PageTitle>
            <BreadcrumbsComponent pagesArr={pagesArr}/>
        </PageInfo>
    )
}