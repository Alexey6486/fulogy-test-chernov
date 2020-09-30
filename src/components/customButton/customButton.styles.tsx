import styled from 'styled-components';

interface BgColor {
    bgColor?: string
}

export const CustomButton = styled.div`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    color: #FFFFFF;
    cursor: pointer;
    padding: 15px 26px;
    background-color: #01BDA7;
    border-radius: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #01BDA7;
    background-color: ${(props: BgColor) => props.bgColor};
    width: max-content;
`;