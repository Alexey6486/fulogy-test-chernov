import React from "react";
import { InfoType } from "../userDataInfo.component";
import {SvgWrap, UserDataItem } from "./userDataItem.styles";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../redux/store";
import {UserDataStateType} from "../../../../redux/userDataReducer";
const Email = require('../../../../../public/assets/icons/at.svg');
const Phone = require('../../../../../public/assets/icons/phone.svg');

type PropsType = {
    dataType: InfoType
}

export const UserDataItemComponent = (props: PropsType) => {

    const userDataState = useSelector<AppRootStateType, UserDataStateType>(state => state.userDataReducer);
    const {email, phone} = userDataState;

    const {dataType} = props;

    const svgIcon = dataType === 'email' ? <Email/> : <Phone/>;

    const emailInfo = email.length ? email : 'Укажите ваш e-mail';
    const phoneInfo = phone.length ? phone : 'Укажите номер телефона';

    const infoData = dataType === 'email' ? emailInfo : phoneInfo;

    return (
        <UserDataItem>
            <SvgWrap>
                {svgIcon}
            </SvgWrap>
            {infoData}
        </UserDataItem>
    )
}