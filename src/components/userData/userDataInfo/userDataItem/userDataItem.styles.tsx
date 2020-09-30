import styled from 'styled-components';

export const UserDataItem = styled.div`
    width: 100%;
    height: 98px;
    display: flex;
    align-items: center;
    padding: 0 77px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 1;
    color: #313131;

    :not(:last-child) {
        border-bottom: 1px solid #CAE7FE;
    }
    
    @media all and (max-width: 768px) {
        padding: 0 45px;
    }
    @media all and (max-width: 576px) {
        height: 64px;
        padding: 0 15px;
        font-size: 14px;
    }
`;
export const SvgWrap = styled.div`
    margin-right: 45px;
    height: 30px;
    width: 30px
    display: flex;
    align-items: center;
    
    & svg {
        width: 28px;
    }
    
    @media all and (max-width: 576px) {
        margin-right: 12px;
    }
`;