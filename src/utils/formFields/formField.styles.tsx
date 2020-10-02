import styled from 'styled-components';

export const EditFormError = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #EB5757;
    padding-left: 15px;
    position: absolute;
    bottom: -17px;
    left: 0;
    
    & + input {
        border: 1px solid #EB5757;
    }
    & + input + label {
        color: #EB5757;
    }
`;