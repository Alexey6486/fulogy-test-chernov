import React, { ReactChild, ReactChildren } from "react";
import { CustomButton } from "./customButton.styles";

interface ChildrenType {
    children: ReactChild | ReactChildren;
}
type PropsType = ChildrenType & {
    bgColor?: string
    onClick?: () => void
    type?: string
    txtColor?: string
}

export const CustomButtonComponent = (props: PropsType) => {

    const {children, onClick, bgColor, type, txtColor} = props;

    const onClickHandler = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <CustomButton onClick={onClickHandler} bgColor={bgColor} type={type} txtColor={txtColor}>
            {children}
        </CustomButton>
    )
}