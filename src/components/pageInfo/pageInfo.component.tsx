import React from "react";
import { BreadcrumbsComponent } from "../breadcrumbs/breadcrumbs.component";
import {PageInfo, PageTitle} from "./pageInfo.styles";

export const PageInfoComponent = () => {
    return (
        <PageInfo>
            <PageTitle>
                ЛИЧНЫЙ ПРОФИЛЬ
            </PageTitle>
            <BreadcrumbsComponent/>
        </PageInfo>
    )
}