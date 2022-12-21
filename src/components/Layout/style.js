import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import colors from "../../theme/colors"

export const Wrapper = styled.div`
  min-height: 100vh;
`
export const GlobalStyle = createGlobalStyle`
  body{
  margin: 0;
  padding: 0;
  background-color: ${colors.primary};
 }
 h1{
  font-family: 'Open Sans', sans-serif;
 }
 h2, p, a{
  font-family: 'Montserrat', sans-serif;
  font-weight: lighter;
 }
 
`
