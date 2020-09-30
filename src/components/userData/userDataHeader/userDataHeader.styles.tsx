import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserDataHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 128px;
    background: linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 0 30px;
    margin-bottom: 24px;
    
    @media all and (max-width: 768px) {
        font-size: 20px;
    }
    @media all and (max-width: 576px) {
        height: 70px;
        padding: 0 10px;
        margin-bottom: 10px;
    }
`;
export const UserDataContent = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;
export const UserDataImgWrap = styled.div`
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 42px;
    
    & img {
        display: block;
        max-width: 100%;
    }
    
    @media all and (max-width: 992px) {
        margin-right: 20px;
    }
    @media all and (max-width: 768px) {
        width: 60px;
        height: auto;
    }
    @media all and (max-width: 576px) {
        width: 40px;
        height: 40px;
        margin-right: 10px;
    }
`;

export const UserDataName = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 1;
    
    @media all and (max-width: 992px) {
        font-size: 25px;
    }
    @media all and (max-width: 768px) {
        font-size: 20px;
    }
    @media all and (max-width: 576px) {
        font-size: 14px;
    }
`;

export const UserDataEdit = styled(Link)`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    text-transform: uppercase;
    text-decoration: none;
    color: #FFFFFF;
`;
export const UserDataEditTitle = styled.div`

    @media all and (max-width: 768px) {
        display: none;
    }
`;

export const SvgWrap = styled.div`
    margin-left: 8px;
    height: 18px;
    width: 18px
    display: flex;
    align-items: center;
    
    & svg {
        width: 18px;
    }
    
    @media all and (max-width: 576px) {
        margin-left: 0;
    }
`;