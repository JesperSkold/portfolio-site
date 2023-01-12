import React from "react"
import { Link } from "gatsby"
import { NavLi } from "./style"

const Links = () => {
const isActive = ({isCurrent}) => isCurrent ? {className: "active"} : null

  return (
    <>
      <NavLi>
        <Link to="/" getProps={isActive}>Home</Link>
      </NavLi>
      <NavLi>
        <Link to="/projects" getProps={isActive}>Projects</Link>
      </NavLi>
      <NavLi>
        <Link to="/about" getProps={isActive}>About</Link>
      </NavLi>
      <NavLi>
        <Link to="/contact" getProps={isActive}>Contact</Link>
      </NavLi>
    </>
  )
}

export default Links
