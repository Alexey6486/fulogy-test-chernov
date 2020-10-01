import styled from 'styled-components';

interface BgColor {
    bgColor?: string
    txtColor: string
}

export const CustomButton = styled.button`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color:  ${(props: BgColor) => props.txtColor ? props.txtColor : '#FFFFFF'};
    cursor: pointer;
    padding: 15px 26px;
    background-color: #01BDA7;
    border-radius: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #01BDA7;
    background-color: ${(props: BgColor) => props.bgColor ? props.bgColor : '#01BDA7'};
    width: 100%;
    max-width: 215px;
    outline: none;
`;