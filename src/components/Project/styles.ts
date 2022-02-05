import styled from "styled-components"
import {colors} from "styles/GlobalStyle"

export const Section = styled.section `
        display: flex;
        justify-content: space-between;
        margin: 30px 10px; 
        border: 0.2rem solid ${colors.borderBeige};
        padding: 15px;
        align-items: center;
        img {
            width: 100px;
        }
        h3 {
            color: ${colors.borderBeige};
            font-size: x-large;
        }
        h4 {
            color: ${colors.borderBeige};
        }
        p {
            color: ${colors.borderBeige};
        }
        div {
            p {
                color: ${colors.borderBeige};
                border: 0.1rem solid ${colors.borderBeige};
                font-size: large;
                padding: 5px;
                &:hover{
                    cursor: pointer;
                    color: ${colors.borderBeige};
                    border: 0.1rem solid ${colors.borderBeige};
                    background-color: ${colors.hoverGreen};
                    font-size: large;
                    padding: 5px;
                } 
            }
        }
    
`