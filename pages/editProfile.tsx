import {AccountPageLayout} from "../src/components/layouts/accountPageLayout/accountPageLayout";
import React from "react";
import {EditDataComponent} from "src/components/editData/editData.component";
import Head from "next/head";

const EditProfile = () => {
    return (
        <>
            <Head>
                <title>User Account | Edit</title>
            </Head>
            <AccountPageLayout>
                <EditDataComponent/>
            </AccountPageLayout>
        </>
    )
};

export default EditProfile;