import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main `
    background-color: ${colors.bgBlue};
    border: 0.5rem solid ${colors.borderBeige};
    border-top-width: 0;
    padding: 3rem 0.8rem;
    
    section {
        display: flex;
        flex-direction: column;
        text-align: center;
        h2 {
            font-size: xx-large;
            color: ${colors.borderBeige};
        }
        a {
            text-decoration: none;
            font-size: x-large;
            color: ${colors.borderBeige};
            background-color: ${colors.bgBlue};
            border: 0.2rem solid ${colors.borderBeige};
            padding: 20px;
            margin: 10px 20px;
            &:hover {
                text-decoration: none;
                color: ${colors.borderBeige};
                background-color: ${colors.hoverGreen};
                border: 0.2rem solid ${colors.borderBeige};
                padding: 20px;
            }
        }
    }   
`