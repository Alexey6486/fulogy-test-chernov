import React from "react";
import {ModalContent, ModalScreen, SvgWrap} from "./modal.styles";
const Close = require('../../../public/assets/icons/cross.svg');

export const ModalComponent = ({children, onClose}) => {

    const onCloseHandler = () => {
        onClose();
    };

    return (
        <ModalScreen>
            <ModalContent>
                <SvgWrap onClick={onCloseHandler}>
                    <Close/>
                </SvgWrap>
                {children}
            </ModalContent>
        </ModalScreen>
    )
}