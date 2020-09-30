import styled from 'styled-components';

export const HeaderBlock = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    background-color: transparent;
    justify-content: flex-end;
    padding: 0 25px;
    
    @media all and (max-width: 576px) {
        padding: 0;
        height: 60px;
    }
`;
export const SvgWrap = styled.div`
    padding-right: 26px;
    height: 40px;
    border-right: 1px solid #ffffff;
    display: flex;
    align-items: center;
    margin-right: 20px;
    
    & > svg {
        cursor: pointer;
        
        @media all and (max-width: 576px) {
            height: 24px;
            width: auto;
        }
    }
    
    @media all and (max-width: 576px) {
        padding-right: 16px;
        height: 24px;
        width: auto;
        margin-right: 10px;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
`;

