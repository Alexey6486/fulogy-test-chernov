import React from "react";
import {Breadcrumbs, CurrentCrumb, LinkCrumb} from "./breadcrumbs.styles";
import Link from "next/link";

type PagesArrType = {
    page: string
    url: string
}
type PropsType = {
    pagesArr: PagesArrType[];
}

export const BreadcrumbsComponent = (props: PropsType) => {

    const {pagesArr} = props;

    const pagesMap = pagesArr.map((page, idx) => {
        if (pagesArr.length > 1 && idx != pagesArr.length - 1) {
            return <Link href={page.url} key={page.page}><LinkCrumb>{page.page}/</LinkCrumb></Link>
        } else if (pagesArr.length > 1 && idx === pagesArr.length - 1) {
            return <CurrentCrumb key={page.page}>{page.page}</CurrentCrumb>
        } else {
            return <CurrentCrumb key={page.page}>{page.page}</CurrentCrumb>
        }
    })

    return (
        <Breadcrumbs>
            {pagesMap}
        </Breadcrumbs>
    )
}