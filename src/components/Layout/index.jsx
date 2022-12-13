import React from "react"
import { GlobalStyle, Wrapper } from "./style"
import Navbar from "../Navbar"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Navbar />
        <h1>HI BODY</h1>
        {children}
      </Wrapper>
      <Footer />
    </>
  )
}

export default Layout
