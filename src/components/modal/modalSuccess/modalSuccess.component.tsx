import React from "react";
import {ModalComponent} from "../modal.component";
import {CustomButtonComponent} from "../../customButton/customButton.component";
import { ButtonsSuccessWrap } from "./modalSuccess.styles";
import s from "./modalSuccess.module.css";

type PropsType = {
    onCloseSuccess: () => void
}

export const ModalSuccessComponent = (props: PropsType) => {

    const {onCloseSuccess} = props;

    return (
        <ModalComponent onClose={onCloseSuccess}>
            <div className={s.modalTitle}>Данные успешно сохранены</div>
            <ButtonsSuccessWrap>
                <CustomButtonComponent type={'button'} onClick={onCloseSuccess}>
                    Хорошо
                </CustomButtonComponent>
            </ButtonsSuccessWrap>
        </ModalComponent>
    )
}