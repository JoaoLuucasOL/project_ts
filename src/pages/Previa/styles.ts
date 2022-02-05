import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main `
    background-color: ${colors.bgBlue};
    border: 0.5rem solid ${colors.borderBeige};
    border-top-width: 0;
    padding: 3rem 8rem;
    nav {
        border: 0.3rem solid ${colors.borderBeige};
        margin: 0 20px;
        background-color: ${colors.bgBlue};
        ul {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            li {
                list-style-type: none;
                padding: 1rem;
                color: #EBECD0; 
                &:hover {
                    text-decoration: none;
                    color: #EBECD0;
                    background-color: #2AC5B2;
                    padding: 1rem;
                    cursor: pointer;
                }
                a {
                    text-decoration: none;
                    font-size: x-large;
                    color: #EBECD0;
                }
            }
        }
    }
    section {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
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
            padding: 5px;
            margin: 10px;
            &:hover {
                text-decoration: none;
                color: ${colors.borderBeige};
                background-color: ${colors.hoverGreen};
                border: 0.2rem solid ${colors.borderBeige};
                padding: 5px;
            }
        }
        h3 {
            color: ${colors.borderBeige};
            font-size: xx-large;
            padding: 30px;
        }
        p {
            color: ${colors.borderBeige};
            font-size: x-large;
            margin: 0 80px;
            padding: 10px;
        }
        img {
            width: 300px;
            border: 0.2rem solid ${colors.borderBeige};
        }
    }
`