import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
  background-color: ${colors.bgBlue};
  border: 0.5rem solid ${colors.borderBeige};
  border-top-width: 0;
  padding: 3rem 0.8rem;
  div {
    display: block;
    width: 3rem;
    margin: 0.5rem 0;
    color: ${colors.borderBeige};
  }
  table {
    margin-bottom: 1rem;
    width: 100%;
    border-collapse: collapse;
    background-color: ${colors.bgBlue};
    tr, td, th {
      border: 1px solid ${colors.borderBeige};
      padding: 0.5rem;
      color: ${colors.borderBeige};
    }
  }
`