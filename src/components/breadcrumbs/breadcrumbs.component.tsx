import React from "react";
import {Breadcrumbs, CurrentCrumb, LinkCrumb} from "./breadcrumbs.styles";

type PropsType = {
    pagesArr: String[];
}

export const BreadcrumbsComponent = (props: PropsType) => {

    const {pagesArr} = props;

    const pagesMap = pagesArr.map((page, idx) => {
        if (pagesArr.length > 1 && idx != pagesArr.length - 1) {
            return <LinkCrumb>{page}/</LinkCrumb>
        } else if (pagesArr.length > 1 && idx === pagesArr.length - 1) {
            return <CurrentCrumb key={page}>{page}</CurrentCrumb>
        } else {
            return <CurrentCrumb key={page}>{page}</CurrentCrumb>
        }
    })

    return (
        <Breadcrumbs>
            {pagesMap}
        </Breadcrumbs>
    )
}