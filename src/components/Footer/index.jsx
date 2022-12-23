import React from "react"
import {
  StyledFooter,
} from "./style"
const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://github.com/JesperSkold">Built & Designed by Jesper Olsson</a>
      <p>© {new Date().getFullYear()}</p>
    </StyledFooter>
  )
}

export default Footer
