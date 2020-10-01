import React from "react";
import { UserData } from "./userData.styles";
import {UserDataHeaderComponent} from "./userDataHeader/userDataHeader.component";

export const UserDataComponent = () => {
    return (
        <UserData>
            <UserDataHeaderComponent/>
        </UserData>
    )
}