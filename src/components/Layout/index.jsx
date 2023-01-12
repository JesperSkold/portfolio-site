import React from "react"
import { GlobalStyle, Wrapper } from "./style"
import Navbar from "../Navbar"
import Footer from "../Footer"
import { Helmet } from "react-helmet"
const Layout = ({ children }) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }} meta={[
        {
            name: 'description',
            content: "Jesper Olsson's portfolio page, including projects and contact info ",
        },
    ]}>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Helmet>
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
