import styled from "styled-components"

export const ProjectTitle = styled.h3``

export const Description = styled.p``

export const ProjectContainer = styled.article`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
  gap: 1rem;

  a {
    text-decoration: none;
  }

  &:first-child {
    margin-top: 3rem;
  }
  img {
    object-position: center top;
    max-height: 200px;
  }
  h3 {
    margin: 0;
  }
`

export const ProjectInfo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
`

export const Links = styled.div`
  align-self: flex-end;
  margin-left: auto;
  a {
    margin: 0 0.5rem;
  }
  span {
    vertical-align: bottom;
    font-size: 2rem;
    color: white;
  }
`

export const LinkContainer = styled.div`
  margin-top: auto;
  display: flex;
`
