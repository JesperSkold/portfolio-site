import React from "react"
import {
  StyledNav,
  Title,
  StyledBurger,
  MobileLinks,
  DesktopLinks,
  Overlay,
  MobileNavContainer
} from "./style"
import { useState } from "react"
import Links from "./links"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <StyledNav>
      <Title href="/">Jesper Olsson</Title>
        <DesktopLinks>
          <Links></Links>
        </DesktopLinks>
      <MobileNavContainer open={open}>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        {open && (
          <>
            <Overlay onClick={() => setOpen(!open)}></Overlay>
            <MobileLinks>
              <Links></Links>
            </MobileLinks>
          </>
        )}
        </MobileNavContainer>
    </StyledNav>
  )
}

export default Navbar
