import styled from 'styled-components';

export const PageInfo = styled.div`
    width: 100%;
    margin-bottom: 32px;
    
    @media all and (max-width: 576px) {
        margin-bottom: 10px;
    }
`;

export const PageTitle = styled.div`
    width: 100%;
    text-transform: uppercase;
    color: #ffffff;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 1;
    margin-bottom: 15px;
    
    @media all and (max-width: 576px) {
        font-size: 14px;
        margin-bottom: 10px;
    }
`;