import styled from "styled-components"
import colors from "../../theme/colors"

export const StyledFooter = styled.footer`
  /* background: ${colors.secondary}; */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  a {
    color: white;
    text-decoration: none;
  }
  p:last-child {
  }
`
