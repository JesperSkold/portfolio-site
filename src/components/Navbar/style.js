import styled from "styled-components"
import colors from "../../theme/colors"

export const StyledNav = styled.nav`
  background: ${colors.primary};
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  a {
    font-size: 18px;
    text-decoration: none;
    color: white;
  }
`

export const DesktopLinks = styled.ul`
@media (max-width:850px){
  display: none;
}
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  li {
    margin: 0 1rem;
    list-style: none;
  }
`
export const Title = styled.a`
  color: white;
  margin: 0;
  font-size: 24px !important;
  font-weight: bold;
  font-family: "Open Sans", sans-serif;

`
export const MobileNavContainer = styled.div`
@media (min-width:850px){
  display: none;
}
`

export const StyledBurger = styled.button`
  position: ${({ open }) => open && "fixed"};
  right: ${({ open }) => open && "3rem"};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  z-index: 10;
  div {
    width: 2rem;
    border: 1px solid black;
    height: 0.25rem;
    background: white;
    mix-blend-mode: difference;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

export const MobileLinks = styled.ul`
  right: 0;
  top: 0;
  position: fixed;
  min-height: 100vh;
  width: 70%;
  padding: 0;
  margin: 0;
  background: ${colors.primary};
  text-align: center;
  z-index: 9;
  li {
    list-style: none;
    padding: 1rem 4rem;
    a {
      font-size: 24px;
    }
  }
  li:first-child {
    margin-top: 5rem;
  }
`

export const Overlay = styled.div`
  background: #0012208c;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  height: 100vh;
`
