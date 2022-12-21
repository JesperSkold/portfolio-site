import React from "react"
import { GlobalStyle, Wrapper } from "./style"
import Navbar from "../Navbar"
import Footer from "../Footer"
import { Helmet } from "react-helmet"
const Layout = ({ children, background }) => {
  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" />
    </Helmet>
      <Wrapper background={background}>
        <GlobalStyle background={background}/>
        <Navbar />
        {children}
      </Wrapper>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
