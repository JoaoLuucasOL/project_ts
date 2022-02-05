import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
  background-color: ${colors.bgBlue};
  border: 0.5rem solid ${colors.borderBeige};
  border-top-width: 0;
  padding: 3rem 0.8rem;
  form {
    margin: 1rem 0;
    padding: 3rem;
    a {
      background-color: ${colors.bgBlue};
      color: ${colors.borderBeige};
      text-decoration: none;
      padding: 6px;
      margin: 5px;
      border: 0.08rem solid ${colors.borderBeige};
      &:hover {
        text-decoration: none;
        color: ${colors.borderBeige};
        background-color: ${colors.hoverGreen};
        padding: 6px;
        margin: 5px;
        border: 0.08rem solid ${colors.borderBeige};
        cursor: pointer;
    }
      
    }
    div {
      margin: 3rem 0;
      display: grid;
      grid-template-columns: 5rem auto;
      color: ${colors.borderBeige};
      textarea {
        padding: 0.3rem;
        border-radius: 0.5rem;
        height: 3rem;
      }
    }
  }
`