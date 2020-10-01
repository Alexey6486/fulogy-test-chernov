import styled from 'styled-components';
const Bg = require('../public/assets/images/bg.png');

export const AppContent = styled.div`
    min-height: 100vh;
    width: 100%;
    background: url(${Bg}) center top / contain no-repeat;
    
    @media all and (max-width: 768px) {
        background-size: 100% 45%;
    }
    @media all and (max-width: 576px) {
        background-size: 100% 33%;
    }
`;