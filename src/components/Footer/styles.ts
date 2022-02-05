import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Footer = styled.footer `
    border: 0.5rem solid ${colors.borderBeige};
    border-top-width: 0;
    border-bottom-width: 0;
    height: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${colors.headerBlue};
    align-items: center;
    section {
        margin: 90px;
        h4 {
            color: ${colors.borderBeige};
            text-align: center;
        }
        p {
            color: ${colors.borderBeige};
            text-align: justify;
        }
    }
    picture {
        img {
            height: 100px;
            margin: 15px;
        }
    }
    @media (max-width: 830px) {
        section {
            h4 {
                font-size: medium;
            }
            p {
                font-size: medium;
            }
        }
        picture{
            img {
                height: 80px;
            
            }
        }
    }
    @media (max-width: 800px) {
        section {
            margin: 3rem 3rem;
            h4 {
                font-size: medium;
            }
            p {
                font-size: medium;
            }
        }
        picture{
            img {
                height: 70px;
            }
        }
    }
    @media (max-width: 630px) {
        section {
            margin: 2rem 2rem;
            h4 {
                font-size: small;
            }
            p {
                font-size: small;
            }
        }
        picture{
            img {
                height: 60px;
            }
        }
    }
`

export const FooterBottom = styled.footer `
    border: 0.5rem solid ${colors.borderBeige};
    border-top-width: 0;
    text-align: center;
    background-color: ${colors.footerBlue};
    color: ${colors.borderBeige};

`
