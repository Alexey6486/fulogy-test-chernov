import styled from 'styled-components';

export const ModalScreen = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
`;
export const ModalContent = styled.div`
    background: #FFFFFF;
    border-radius: 10px;
    padding: 69px 50px 56px;
    z-index: 501;
    position: relative;
    width: 100%;
    max-width: 600px;
    
    @media all and (max-width: 576px) {
        padding: 69px 30px 56px;
    }
`;
export const SvgWrap = styled.div`
    position: absolute;
    top: 29px;
    right: 29px;
    height: 14px;
    width: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
    
    & > svg > path {
        fill: #828282
    }
`;
export const ModalTitle = styled.div`
    font-family: Open Sans;
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