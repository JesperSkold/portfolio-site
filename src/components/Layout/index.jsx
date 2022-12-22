import React from "react"
import { GlobalStyle, Wrapper } from "./style"
import Navbar from "../Navbar"
import Footer from "../Footer"
import { Helmet } from "react-helmet"
const Layout = ({ children }) => {
  return (
    <>
    <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </Helmet>
      <Wrapper>
        <GlobalStyle />
        <Navbar />
        {children}
      </Wrapper>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
