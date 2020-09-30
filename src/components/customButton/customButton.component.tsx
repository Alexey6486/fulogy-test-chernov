import React, { ReactChild, ReactChildren } from "react";
import { CustomButton } from "./customButton.styles";

interface ChildrenType {
    children: ReactChild | ReactChildren;
}
type PropsType = ChildrenType & {
    bgColor?: string
    onClick?: () => void
}

export const CustomButtonComponent = (props: PropsType) => {

    const {children, onClick, bgColor} = props;

    const onClickHandler = () => {
        if (onClick) {
            onClick();
        }
    }

    return (
        <CustomButton onClick={onClickHandler} bgColor={bgColor}>
            {children}
        </CustomButton>
    )
}