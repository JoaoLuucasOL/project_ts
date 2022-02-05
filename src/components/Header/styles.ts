import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Header = styled.header `
    display: flex;
    height: 80px;
    border: 0.5rem solid ${colors.borderBeige};
    background-color: ${colors.headerBlue};
    align-items: center;
    picture {
        img {
            height: 50px;
            margin: 10px;
        }
    }
    h1 {
        width: 100%;
        text-align: center;
        color: ${colors.borderBeige};
    }    
`
