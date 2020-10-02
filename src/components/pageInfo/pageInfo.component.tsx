import React from "react";
import { BreadcrumbsComponent } from "../breadcrumbs/breadcrumbs.component";
import {PageInfo, PageTitle} from "./pageInfo.styles";
import {useRouter} from "next/router";
import {parseUrlForBreadcrumbs} from "../../utils/parseUrlForBreadcrumbs/breadcrumbsArr";

export const PageInfoComponent = () => {

    const router = useRouter();

    const crumbsPageAndLinks = parseUrlForBreadcrumbs(router)

    const pagesArr = [{ page: 'Главная', url: '/'}, ...crumbsPageAndLinks]

    return (
        <PageInfo>
            <PageTitle>
                ЛИЧНЫЙ ПРОФИЛЬ
            </PageTitle>
            <BreadcrumbsComponent pagesArr={pagesArr}/>
        </PageInfo>
    )
}