import React from "react"
import {
  StyledFooter,
  PrimaryRow,
  SecondaryRow,
  About,
  Contact,
  Socials,
} from "./style"
const Footer = () => {
  return (
    <StyledFooter>
      <PrimaryRow>
        <About>
          <h2>About us</h2>
          <p>
            At elementum eu facilisis sed odio morbi quis commodo. Turpis
            tincidunt id aliquet risus feugiat in ante metus. Scelerisque
            viverra mauris in aliquam sem fringilla ut morbi. Ultricies lacus
            sed turpis tincidunt id aliquet. Est velit egestas dui id ornare.
            Nunc id cursus metus aliquam eleifend mi in nulla posuere. At
            elementum eu facilisis sed odio morbi quis commodo. Turpis tincidunt
            id aliquet risus feugiat in ante metus. Scelerisque viverra mauris
            in aliquam sem fringilla ut morbi. Ultricies lacus sed turpis
            tincidunt id aliquet. Est velit egestas dui id ornare. Nunc id
            cursus metus aliquam eleifend mi in nulla posuere. At elementum eu
            facilisis sed odio morbi quis commodo. Turpis tincidunt id aliquet
            risus feugiat in ante metus. Scelerisque viverra mauris in aliquam
            sem fringilla ut morbi. Ultricies lacus sed turpis tincidunt id
            aliquet. Est velit egestas dui id ornare. Nunc id cursus metus
            aliquam eleifend mi in nulla posuere.
          </p>
        </About>
        <Contact>
          <h2>Contact us</h2>
          <p>Chomping Chapters</p>
          <p> 146 Tom's Tomes Street</p>
          <p>E1 6AN Portsoken</p>
          <p>Chomping-chapters@tomes.com</p>
        </Contact>
        <Socials>
          <h2>Socials</h2>
          <p>Youtube</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </Socials>
      </PrimaryRow>
      <SecondaryRow>
        <p>© {new Date().getFullYear()} Chompy</p>
      </SecondaryRow>
    </StyledFooter>
  )
}

export default Footer
