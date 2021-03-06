import styled from 'styled-components';

export const ButtonsConfirmWrap = styled.div`
    width: 100%;

    & > button {
        margin-left: auto;
        margin-right: auto;
        
        :not(:last-child) {
            margin-bottom: 28px;
        }
    }
`;
export const ModalConfirmTitle = styled.div`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    color: rgba(49, 49, 49, 0.7);
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 30px;
`;