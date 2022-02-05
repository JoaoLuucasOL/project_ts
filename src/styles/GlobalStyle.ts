import {createGlobalStyle} from "styled-components"
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: url('assets/fonts/roboto.woff2') format ('woff2');
    }    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
    }
` 

export const colors = {
    bgBlue: "#0E878E",
    borderBeige: "#EBECD0",
    headerBlue: "#0A5D77",
    footerBlue: "#05485E",
    navBlue: "#2691B2",
    hoverGreen: "#2AC5B2"
}