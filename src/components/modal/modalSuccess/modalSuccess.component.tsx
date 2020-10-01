import React from "react";
import {ModalComponent} from "../modal.component";
import {CustomButtonComponent} from "../../customButton/customButton.component";
import { ButtonsSuccessWrap } from "./modalSuccess.styles";

type PropsType = {
    onCloseSuccess: () => void
}

export const ModalSuccessComponent = (props: PropsType) => {

    const {onCloseSuccess} = props;

    return (
        <ModalComponent onClose={onCloseSuccess} title={'Данные успешно сохранены'}>
            <ButtonsSuccessWrap>
                <CustomButtonComponent type={'button'} onClick={onCloseSuccess}>
                    Хорошо
                </CustomButtonComponent>
            </ButtonsSuccessWrap>
        </ModalComponent>
    )
}