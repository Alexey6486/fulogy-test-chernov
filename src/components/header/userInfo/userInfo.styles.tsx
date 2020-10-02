import styled from 'styled-components';

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    height: 24px;
    cursor: pointer;
`;

export const UserImgWrap = styled.div`
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    
    & img {
        display: block;
        max-width: 100%;
    }
    
    @media all and (max-width: 576px) {
        margin-right: 0;
        width: 24px;
        height: 24px;
    }
`;

export const UserName = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    color: #ffffff;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 1;
    
    @media all and (max-width: 576px) {
        display: none;
    }
`;