import styled from "styled-components";
import { colors } from "./GlobalStyle"

const Button = styled.button `
    text-align: center;
    text-decoration: none;
    color: ${colors.borderBeige};
    background-color: ${colors.bgBlue};
    padding: 6px;
    margin: 5px;
    border: 0.08rem solid ${colors.borderBeige};
    &:hover {
        text-decoration: none;
        color: ${colors.borderBeige};
        background-color: ${colors.hoverGreen};
        padding: 5px;
        margin: 5px;
        border: 0.08rem solid ${colors.borderBeige};
        cursor: pointer;
    }

`

export default Button