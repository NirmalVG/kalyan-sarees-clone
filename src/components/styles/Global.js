import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    img {
        max-width: 100%;
    }

    h3 {
        text-align: center;
        color: #000000;
        font-size: 31px;
        font-family: "Questrial", sans-serif;
        font-weight: 800;
    }

    p {
        text-align: center;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
        color: #54546F;
    }

    h4 {
        position: absolute;
        top: 5%;
        left: 10%;
        color: #fff;
        font-size: 32px;
        font-family: "Questrial", sans-serif;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 20px;
        }
    }

    h5 {
        position: absolute;
        top: 50%;
        left: 10%;
        color: #fff;
        font-family: 'Roboto', sans-serif;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 8px;
            top:60%;
        }
    }

    h6 {
        padding: 10px;
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 15px;
        font-weight: 300;
        font-family: 'Ubuntu', sans-serif;
    }
`;

export default GlobalStyles;
