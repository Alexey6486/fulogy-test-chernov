import styled from 'styled-components';

export const Breadcrumbs = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    color: #ffffff;
    
    @media all and (max-width: 576px) {
        font-size: 12px;
    }
`;
export const LinkCrumb = styled.a`
    display: flex;
    align-items: center;
    color: #ffffff;
    cursor: pointer;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    text-decoration: none;
    
    @media all and (max-width: 576px) {
        font-size: 12px;
    }
`;
export const CurrentCrumb = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1;
    
    @media all and (max-width: 576px) {
        font-size: 12px;
    }
`;
