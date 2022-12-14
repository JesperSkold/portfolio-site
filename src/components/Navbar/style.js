import styled from "styled-components"
import colors from "../../theme/colors"

export const StyledNav = styled.nav`
  background: ${colors.secondary};
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
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  li {
    margin: 0 1rem;
    list-style: none;
  }
`
export const Title = styled.h1`
  color: white;
  margin: 0;

  @media (max-width: 360px){
    word-spacing: 10rem;
  }
`
//burger vvv
export const StyledBurger = styled.button`
  position: fixed;
  right: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }

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

// export const MobileAside = styled.aside`
//   background: ${colors.secondary};
//   @media (min-width: 851px) {
//     display: none;
//   }
// `

export const MobileLinks = styled.ul`
  right: 0;
  top: 0;
  position: fixed;
  height: 100%;
  padding: 0;
  margin: 0;
  background: ${colors.secondaryLight};
  li {
    list-style: none;
    padding: 1rem 2rem;
  }

  li:first-child {
    margin-top: 5rem;
  }
`
