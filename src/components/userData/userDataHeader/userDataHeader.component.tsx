import React from "react";
import {
    EditInnerLink,
    SvgWrap,
    UserDataContent,
    UserDataEdit,
    UserDataEditTitle,
    UserDataHeader,
    UserDataImgWrap,
    UserDataName
} from "./userDataHeader.styles";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {UserDataStateType} from "../../../redux/userDataReducer";
import {useRouter} from "next/router";
const UserImage = require('../../../../public/assets/images/user_large.png');
const Pen = require('../../../../public/assets/icons/pen.svg');
const Cross = require('../../../../public/assets/icons/cross.svg');

export const UserDataHeaderComponent = () => {

    const userDataState = useSelector<AppRootStateType, UserDataStateType>(state => state.userDataReducer);
    const {imageUrl_large, lastName, firstName, patronymic} = userDataState;

    const userImage = imageUrl_large.length ? <img src={imageUrl_large} alt={'user image'}/> : <img src={UserImage} alt={'user image'}/>;

    const router = useRouter();

    const linkTo = router.pathname === '/editProfile' ? '/' : '/editProfile';
    const linkType = router.pathname === '/editProfile' ? 'закрыть' : 'редактировать';
    const linkIcon = router.pathname === '/editProfile' ? <Cross/> : <Pen/>;

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

            <UserDataEdit href={linkTo}>
                <EditInnerLink>
                    <UserDataEditTitle>
                        {linkType}
                    </UserDataEditTitle>
                    <SvgWrap>
                        {linkIcon}
                    </SvgWrap>
                </EditInnerLink>
            </UserDataEdit>
        </UserDataHeader>
    )
};

