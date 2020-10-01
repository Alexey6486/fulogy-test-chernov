import styled from 'styled-components';

export const ButtonsSuccessWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > button {
        :not(:last-child) {
            margin-bottom: 28px;
        }
    }
`;
export const ModalSuccessTitle = styled.div`
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