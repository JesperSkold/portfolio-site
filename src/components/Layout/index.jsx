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
        {children}
      </Wrapper>
      <Footer />
    </>
  )
}

export default Layout
