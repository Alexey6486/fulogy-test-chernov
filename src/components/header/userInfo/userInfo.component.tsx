import React from "react";
import {UserImgWrap, UserInfo, UserName} from "./userInfo.styles";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {UserDataStateType} from "../../../redux/userDataReducer";
const UserImage = require('../../../../public/assets/images/user_small.png');

export const UserInfoComponent = () => {

    const userDataState = useSelector<AppRootStateType, UserDataStateType>(state => state.userDataReducer);
    const {imageUrl_small, lastName, firstName} = userDataState;

    const userImage = imageUrl_small.length ? <img src={imageUrl_small} alt={'user image'}/> : <img src={UserImage} alt={'user image'}/>;
    const firstNameEdited = firstName.slice(0,1).toUpperCase();

    return (
        <UserInfo>
            <UserImgWrap>
                {userImage}
            </UserImgWrap>
            <UserName>
                {lastName} {firstNameEdited}.
            </UserName>
        </UserInfo>
    )
}