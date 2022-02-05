import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main `
    background-color: ${colors.bgBlue};
    border: 0.5rem solid ${colors.borderBeige};
    border-top-width: 0;
    padding: 5rem 8rem;
    text-align: center;
    
    h2 {
        color: ${colors.borderBeige};;
        font-size: xx-large;
        text-align: center;
    }
    
    picture {
        text-align: center;
        img {
            border: 0.2rem solid #EBECD0;
            margin: 20px;
                
        }
    }
    div {
        p {
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
    }
    

    section {
        border: 0.2rem solid ${colors.borderBeige};
        margin: 2rem;
        
        
        section {
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding: 10px 0;
            margin: 0;
            border: none;
            
            h4 {
                color: ${colors.borderBeige};;
                display: flex;
                font-size: large;
                padding: 10px;
                }
            p {
                color: ${colors.borderBeige};;
                display: flex;
                padding: 10px;
            }
        }
    }
         
`