import styled from 'styled-components';

export const EditFormBlock = styled.div`
    display: flex;
`;
export const BtnWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 26px;
`;
export const EditFormWrap = styled.form`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const EditFormFieldsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    
    @media all and (max-width: 992px) {
        justify-content: center;
    }
`;
export const EditFormLabel = styled.label`
    position: absolute;
    top: -8px;
    background-color: #ffffff;
    left: 10px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: rgba(49, 49, 49, 0.7);
    padding: 0 4px;
`;
export const FieldGroup = styled.div`
    width: 255px;
    height: 57px;
    position: relative;
    background: #FFFFFF;
    border-radius: 10px;
        
    & input {
        display: flex;
        align-items: center;
        height: 100%;
        width: 100%;
        border: 1px solid rgba(49, 49, 49, 0.4);
        border-radius: 10px;
        padding: 0 10px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 19px;
        color: #313131;
        
        :focus {
            outline: none;
            border: 1px solid #359FF4;
            
            & + ${EditFormLabel} {
                color: #359FF4;
            }
        }
    }
    
    @media all and (max-width: 768px) {
        width: 100%;
    }
`;
export const FieldGroupWrap = styled.div`
    width: 33%;
    display: flex;
    align-items: center;
    padding-left: 25px;
    
    :not(:last-child) {
        border-right: 1px solid #CAE7FE;
        
        @media all and (max-width: 1200px) {
            border-right: none;
        }
        @media all and (max-width: 992px) {
            margin-bottom: 40px;
        }
    }
    }
    
    @media all and (max-width: 1200px) {
        padding-left: 15px;
    }
    @media all and (max-width: 992px) {
        width: 60%;
    }
    @media all and (max-width: 768px) {
        width: 100%;
    }
    @media all and (max-width: 576px) {
        padding-left: 0;
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
    
    @media all and (max-width: 1200px) {
        margin-right: 15px;
    }
    @media all and (max-width: 400px) {
        display: none;
    }
`;

