import { createGlobalStyle } from 'styled-components';
import BeynoFont from './BEYNO.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'BeynoFont';
        src: local('BeynoFont'), local('BeynoFont'),
        url(${BeynoFont}) format('woff');
    }
`;