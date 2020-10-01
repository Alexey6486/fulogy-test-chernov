import React, {PropsWithChildren, useEffect, useState} from "react";
import {
    BtnWrap,
    EditFormBlock, EditFormFieldsContainer,
    EditFormLabel,
    EditFormWrap,
    FieldGroup,
    FieldGroupWrap,
    SvgWrap
} from "./editForm.styles";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "src/redux/store";
import {UserDataStateType} from "../../../redux/userDataReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CustomButtonComponent} from "../../customButton/customButton.component";
import {fieldRequired} from "../../../utils/formValidation/formValidation";
import {Input} from "../../../utils/formFields/formFields.component";
import { ModalConfirmComponent } from "src/components/modal/modalConfirm/modalConfirm.component";
import { ModalSuccessComponent } from "src/components/modal/modalSuccess/modalSuccess.component";
const Email = require('../../../../public/assets/icons/at.svg');
const Phone = require('../../../../public/assets/icons/phone.svg');
const Name = require('../../../../public/assets/icons/name.svg');

type EditFormType = {
    fullName: string
    email: string
    phone: string
}

export const EditFormComponent = () => {

    const dispatch = useDispatch();
    const userDataState = useSelector<AppRootStateType, UserDataStateType>(state => state.userDataReducer);
    const {email, phone, firstName, lastName, patronymic} = userDataState;

    const fullName = `${lastName} ${firstName} ${patronymic}`;

    const [confirm, setConfirm] = useState(false);
    const [success, setSuccess] = useState(false);

    const onSubmit = (editFormData: EditFormType) => {
        setConfirm(true);
    };
    const onCloseConfirm = () => setConfirm(false);
    const onCloseSuccess = () => setSuccess(false);
    const onConfirm = () => {
        setConfirm(false);
        setSuccess(true);
    }

    useEffect(() => {

    }, [dispatch]);

    return (
        <EditFormBlock>
            <ReduxEditForm onSubmit={onSubmit} initialValues={{fullName, email, phone}}/>
            { confirm && <ModalConfirmComponent onCloseConfirm={onCloseConfirm} onConfirm={onConfirm}/> }
            { success && <ModalSuccessComponent onCloseSuccess={onCloseSuccess}/> }
        </EditFormBlock>
    )
}

const EditForm: React.FC<InjectedFormProps<EditFormType>> = (props: PropsWithChildren<InjectedFormProps<EditFormType>>) => {

    return (
        <EditFormWrap onSubmit={props.handleSubmit}>
            <EditFormFieldsContainer>
                <FieldGroupWrap>
                    <SvgWrap>
                        <Name/>
                    </SvgWrap>
                    <FieldGroup>
                        <Field component={Input} name={'fullName'} type={'text'} placeholder={'Укажите ваши фамилию и имя'}
                               id={'fullName'} validate={[fieldRequired]}/>
                        <EditFormLabel>Фамилия и имя</EditFormLabel>
                    </FieldGroup>
                </FieldGroupWrap>
                <FieldGroupWrap>
                    <SvgWrap>
                        <Email/>
                    </SvgWrap>
                    <FieldGroup>
                        <Field component={Input} name={'email'} type={'email'} placeholder={'Укажите ваш email'}
                               id={'email'}
                               validate={[fieldRequired]}/>
                        <EditFormLabel>E-mail</EditFormLabel>
                    </FieldGroup>
                </FieldGroupWrap>
                <FieldGroupWrap>
                    <SvgWrap>
                        <Phone/>
                    </SvgWrap>
                    <FieldGroup>
                        <Field component={Input} name={'phone'} type={'number'} placeholder={'Укажите номер телефона'}
                               id={'phone'}/>
                        <EditFormLabel>Номер телефона</EditFormLabel>
                    </FieldGroup>
                </FieldGroupWrap>
            </EditFormFieldsContainer>
            <BtnWrap>
                <CustomButtonComponent type={'submit'} bgColor={'#01BDA7'}>
                    Сохранить изменения
                </CustomButtonComponent>
            </BtnWrap>
        </EditFormWrap>
    )
};

const ReduxEditForm = reduxForm<EditFormType>({
    form: 'EditForm',
})(EditForm);