import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import colors from "../../theme/colors"

export const Wrapper = styled.div`
  /* min-height: 100vh; */
  color: white;
`
export const GlobalStyle = createGlobalStyle`
  html {
    position: relative;
    min-height: 100%;
  }
  body{
  background-color: ${colors.primary};
  background-size: cover;
  background-position: center bottom;
  margin: 0 0 150px 0;
  bottom: 64px;
  padding: 0;
  background-attachment: fixed;
 }
 h1, h2, h3{
  font-family: 'Open Sans', sans-serif;
 }
 h1{
    font-size: 48px;
 }
  p, a{
  font-family: 'Montserrat', sans-serif;
  font-weight: lighter;
 }
 h3{
  /* font-family: 'Montserrat', sans-serif; */
 }
`
