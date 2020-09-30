import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import { UserData } from "./userData.styles";
import {UserDataHeaderWithRouter} from "./userDataHeader/userDataHeader.component";
import { UserDataInfoComponent } from "./userDataInfo/userDataInfo.component";
import {EditDataComponent} from "../editData/editData.component";
import {createMemoryHistory} from "history";

export const UserDataComponent = () => {

    const history = createMemoryHistory();

    return (
        <UserData>
            <UserDataHeaderWithRouter/>
            <Switch>
                <Route exact path="/" component={UserDataInfoComponent} />
                <Route path="/editData" component={EditDataComponent} />
            </Switch>
        </UserData>
    )
}