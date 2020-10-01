import React from "react";
import {ModalContent, ModalScreen, ModalTitle, SvgWrap} from "./modal.styles";
const Close = require('../../../public/assets/icons/cross.svg');

export const ModalComponent = ({children, onClose, title}) => {

    const onCloseHandler = () => {
        onClose();
    };

    return (
        <ModalScreen>
            <ModalContent>
                <SvgWrap onClick={onCloseHandler}>
                    <Close/>
                </SvgWrap>
                <ModalTitle>{title}</ModalTitle>
                {children}
            </ModalContent>
        </ModalScreen>
    )
}