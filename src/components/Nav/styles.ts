import styled from "styled-components"
import {colors} from "styles/GlobalStyle"

export const Nav = styled.header `
    border: 0.5rem solid ${colors.borderBeige};
    border-bottom-width: 0.3rem solid ${colors.borderBeige};
    border-top-width: 0;
    background-color: ${colors.navBlue};
    ul {
        display: flex;
        flex-direction: row;
        justify-content:space-evenly;
        li {
            list-style-type: none;
            padding: 0.5rem;
            &:hover {
                text-decoration: none;
                color: ${colors.borderBeige};
                background-color: ${colors.hoverGreen};
                padding: 0.5rem;
                cursor: pointer;
            }
            a {
                text-decoration: none;
                color: ${colors.borderBeige};
                padding: 5px;  
            }
        }
    }    
`