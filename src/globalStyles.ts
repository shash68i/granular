import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
    }

    *{
       margin: 0;
       padding: 0;
       outline:0;
    }

    html {
       font-size: 62.5%;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

`;
