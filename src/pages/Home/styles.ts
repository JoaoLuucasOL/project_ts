import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main `
    background-color: ${colors.bgBlue};
    border: 0.5rem solid ${colors.borderBeige};
    border-top-width: 0;
    padding: 3rem;
    nav {
        border: none;
        background-color: ${colors.bgBlue};
        padding: 10px;
        h2 {
            width: 100%;
            text-align: center;
            color: ${colors.borderBeige}; 
        }
        ul {
            display: flex;
            flex-direction: row;
            justify-content:space-evenly;
            li {
                list-style-type: none;
                padding: 2rem;
                a{
                    text-decoration: none;
                    color: ${colors.borderBeige};
                    background-color: ${colors.bgBlue};
                    padding: 5px;
                    border: 0.08rem solid ${colors.borderBeige};
                    &:hover{
                        text-decoration: none;
                        color: ${colors.borderBeige};
                        background-color: ${colors.hoverGreen};
                        padding: 7px;
                        border: 0.08rem solid ${colors.borderBeige};
                        cursor: pointer;
                    }
                }
            }
        }
    }
    section {
        h2 {
            width: 100%;
            text-align: center;
            color: ${colors.borderBeige};
        }
        p {
            width: 100%;
            text-align: center;
            color: ${colors.borderBeige} 
        }
    }
`