import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main `
    background-color: ${colors.bgBlue};
    border: 0.5rem solid ${colors.borderBeige};
    border-top-width: 0;
    padding: 3rem 0.8rem;
    
    form {
        fieldset {
            border: 0.2rem solid ${colors.borderBeige};
            margin: 1rem 3rem;
            padding: 2rem;
            legend {
                color: ${colors.borderBeige};
                font-size: large;
            }
            div {
                display: flex;
                flex-direction: row;
                margin: 2rem 0;
                label {
                    width: 12%;
                    color: ${colors.borderBeige};
                    padding: 4px;
                    text-align: center;
                }
                input {
                    width: 88%;
                    padding: 4px;
                }
            }
            section {
                display: flex;
                flex-direction: row;
                justify-content:center;
                align-items: center;
                padding: 10px;
                a {
                    text-align: center;
                    text-decoration: none;
                    color: ${colors.borderBeige};
                    background-color: ${colors.bgBlue};
                    padding: 5px;
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
                }
            }
        }
    }   
`