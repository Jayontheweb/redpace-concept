
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Open Sans Condensed', sans-serif;
    overflow-y: scroll;
    background-color: #577170;
}

.active {
    ::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #FF472E;
    transform: scaleX(1);
    transition: transform 0.3s ease;
    }
}

a {
    text-decoration: none;
    color: black;
}

* {
    box-sizing: border-box;
}
`;


