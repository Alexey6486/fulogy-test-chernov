import React from "react";
import { EditFormError } from "./formField.styles";

const FormField = (Element: string) => ({input, meta, ...props}: any) => {

    const error = meta.touched && meta.error;
    return (
        <>
            {
                error &&
                <EditFormError>{meta.error}</EditFormError>
            }
            <Element {...input} {...props}/>

        </>
    )
};

export const Input = FormField('input');