import React from "react"
import {
  StyledNav,
  Title,
  StyledBurger,
  MobileLinks,
  DesktopLinks,
} from "./style"
import { useState } from "react"
import Links from "./links"
import MediaQuery from "react-responsive"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <StyledNav>
      <Title href="/">Jesper Olsson</Title>
      <MediaQuery minWidth={850}>
        <DesktopLinks>
          <Links></Links>
        </DesktopLinks>
      </MediaQuery>
      <MediaQuery maxWidth={850}>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        {open && (
          <MobileLinks>
            <Links></Links>
          </MobileLinks>
        )}
      </MediaQuery>
    </StyledNav>
  )
}

export default Navbar
