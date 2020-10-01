import styled from 'styled-components';

export const ButtonsWrap = styled.div`
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