import React from "react";
import {SvgWrap, UserDataContent, UserDataEdit, UserDataEditTitle, UserDataHeader, UserDataImgWrap, UserDataName} from "./userDataHeader.styles";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {UserDataStateType} from "../../../redux/userDataReducer";
import {RouteComponentProps, withRouter } from "react-router-dom";
const UserImage = require('../../../../public/assets/images/user_large.png');
const Pen = require('../../../../public/assets/icons/pen.svg');
const Cross = require('../../../../public/assets/icons/cross.svg');

type PropsType = RouteComponentProps & {}

const UserDataHeaderComponent = (props: PropsType) => {

    const {history} = props;
    const currentUrl = history.location.pathname;

    const userDataState = useSelector<AppRootStateType, UserDataStateType>(state => state.userDataReducer);
    const {imageUrl_large, lastName, firstName, patronymic} = userDataState;

    const userImage = imageUrl_large.length ? <img src={imageUrl_large} alt={'user image'}/> : <img src={UserImage} alt={'user image'}/>;

    const linkTo = currentUrl === '/editData' ? '/' : '/editData';
    const linkType = currentUrl === '/editData' ? 'закрыть' : 'редактировать';
    const linkIcon = currentUrl === '/editData' ? <Cross/> : <Pen/>;

    return (
        <UserDataHeader>
            <UserDataContent>
                <UserDataImgWrap>
                    {userImage}
                </UserDataImgWrap>
                <UserDataName>
                    {lastName} {firstName} {patronymic}
                </UserDataName>
            </UserDataContent>
            <UserDataEdit to={linkTo}>
                <UserDataEditTitle>
                    {linkType}
                </UserDataEditTitle>
                <SvgWrap>
                    {linkIcon}
                </SvgWrap>
            </UserDataEdit>
        </UserDataHeader>
    )
};

export const UserDataHeaderWithRouter = withRouter(UserDataHeaderComponent)