import React from "react";
import {ModalComponent} from "../modal.component";
import {CustomButtonComponent} from "../../customButton/customButton.component";
import {ButtonsConfirmWrap} from "./modalConfirm.styles";

type PropsType = {
    onCloseConfirm: () => void
    onConfirm: () => void
}

export const ModalConfirmComponent = (props: PropsType) => {

    const {onCloseConfirm, onConfirm} = props;

    return (
        <ModalComponent onClose={onCloseConfirm} title={'Сохранить изменения?'}>
            <ButtonsConfirmWrap>
                <CustomButtonComponent type={'button'} onClick={onConfirm}>
                    Сохранить
                </CustomButtonComponent>
                <CustomButtonComponent type={'button'} bgColor={'#FFFFFF'} txtColor={'#01BDA7'} onClick={onCloseConfirm}>
                    Не сохранять
                </CustomButtonComponent>
            </ButtonsConfirmWrap>
        </ModalComponent>
    )
}