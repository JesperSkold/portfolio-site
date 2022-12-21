import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
import colors from "../../theme/colors"

export const Wrapper = styled.div`
  min-height: 100vh;
  /* background-image: url(${({ background }) => background && background}); */
  /* position: fixed;
  height: 100%;
  width: 100%; */
  /* background-size: cover;
  background-position: center bottom; */
  color: white;
`
export const GlobalStyle = createGlobalStyle`
 /* backgrounds by SVGBackgrounds.com and app.haikei.app  */
  body{
  background-image: url(${({ background }) => background && background});
  background-size: cover;
  background-position: center bottom;
  margin: 0;
  padding: 0;
  background-attachment: fixed;
 }
 h1, h3{
  font-family: 'Open Sans', sans-serif;
 }
 h2, p, a{
  font-family: 'Montserrat', sans-serif;
  font-weight: lighter;
 }
 h3{
  /* font-family: 'Montserrat', sans-serif; */
 }
`
