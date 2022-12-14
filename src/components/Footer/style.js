import styled from "styled-components"
import colors from "../../theme/colors"

export const StyledFooter = styled.footer`
  background: ${colors.secondary};
`

export const PrimaryRow = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  color: white;

  h2{
    margin: 0;
  }
  div{
    padding: 1rem;
} 
@media (max-width: 850px){
  grid-template-columns: 1fr
}
`

export const SecondaryRow = styled.div`
  background: ${colors.secondaryLight};
  padding: 1rem;
  display: flex;
  color: #e2dede;
  p{
    margin: 0 1rem 0 auto;
  }
`

export const About = styled.div`
`

export const Contact = styled.div`

`

export const Socials = styled.div`

`