import React from "react"
import { GlobalStyle, Wrapper } from "./style"
import Navbar from "../Navbar"
import Footer from "../Footer"
import { Helmet } from "react-helmet"
import colors from "../../theme/colors"
const Layout = ({ children }) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta name="theme-color" content={`${colors.primary}`} />
        <meta property="og:image" content="home-page.png" />
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
