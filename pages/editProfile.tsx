import {AccountPageLayout} from "../src/components/layouts/accountPageLayout/accountPageLayout";
import React from "react";
import { EditDataComponent } from "src/components/editData/editData.component";

const EditProfile = () => {
    return (
        <AccountPageLayout>
            <EditDataComponent/>
        </AccountPageLayout>
    )
};

export default EditProfile;