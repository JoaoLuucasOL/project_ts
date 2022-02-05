import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main `
    background-color: ${colors.bgBlue};
    border: 0.5rem solid ${colors.borderBeige};
    border-top-width: 0;
    padding: 3rem 0.8rem;
    
    h2 {
        display: flex;
        justify-content: center;
        color: ${colors.borderBeige};
        font-size: xx-large;
        padding: 2.5rem;
    }    
`