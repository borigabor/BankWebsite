import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        list-style: none;
        font-family: 'Encode Sans Expanded', sans-serif;
    }
`;

export default GlobalStyle;