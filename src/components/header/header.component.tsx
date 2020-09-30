import React from "react";
import {HeaderBlock, HeaderContent, SvgWrap} from "./header.styles";
import {UserInfoComponent} from "./userInfo/userInfo.component";

const Bell = require('../../../public/assets/icons/bell.svg');

export const HeaderComponent = () => {

    return (
        <HeaderBlock>
            <HeaderContent>
                <SvgWrap>
                    <Bell/>
                </SvgWrap>
                <UserInfoComponent/>
            </HeaderContent>
        </HeaderBlock>
    )
}