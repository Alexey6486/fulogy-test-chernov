import styled, {keyframes} from 'styled-components';

const Dropdown = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const Dropup = keyframes`
  from {
    transform: translateY(0);
    opacity: 0;
  }
  to {
    transform: translateY(-100px);
    opacity: 1;
  }
`;
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
    animation: ${Dropdown} 400ms forwards;
    animation-timing-function: cubic-bezier(0.57, 0.21, 0.29, 1.57);
    
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
