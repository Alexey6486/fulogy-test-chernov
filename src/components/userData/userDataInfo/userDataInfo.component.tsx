import React from "react";
import { UserDataInfo } from "./userDataInfo.styles";
import {UserDataItemComponent} from "./userDataItem/userDataItem.component";

export type InfoType = 'email' | 'phone';

export const UserDataInfoComponent = () => {

    const userDataArr = ['email', 'phone'];
    const userDataArrMap = userDataArr.map((userData: InfoType) => <UserDataItemComponent key={userData} dataType={userData}/>)

    return (
        <UserDataInfo>
            {userDataArrMap}
        </UserDataInfo>
    )
}