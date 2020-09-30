import React from "react";
import {Breadcrumbs, CurrentCrumb, LinkCrumb} from "./breadcrumbs.styles";

export const BreadcrumbsComponent = () => {

    return (
        <Breadcrumbs>
            <LinkCrumb>Главная</LinkCrumb>/
            <CurrentCrumb>Личный кабинет</CurrentCrumb>
        </Breadcrumbs>
    )
}