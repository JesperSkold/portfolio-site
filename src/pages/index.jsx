import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { Button } from "../components/styles/reusables.js"
import { Background } from "../components/styles/reusables"

const Main = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  text-align: center;

  h1 {
    font-size: 64px;
    margin: 10% 0 0 0;
  }
  p {
    font-size: 36px;
  }
  a {
    text-decoration: none;
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Background
        background={data.contentfulHome.backgroundImage.file.url}
        position={"40% 70%"}
      />
      <Main>
        <h1>{data.contentfulHome.title}</h1>
        <p>{data.contentfulHome.subtitle}</p>
        <Link to="/projects">
          <Button>PROJECTS</Button>
        </Link>
      </Main>
    </Layout>
  )
}

export default IndexPage

export const Head = ({ data }) => <title>{data.contentfulHome.title}</title>

export const IndexPagePageQuery = graphql`
  query {
    contentfulHome {
      title
      subtitle
      backgroundImage {
        file {
          url
        }
      }
    }
  }
  #   contentfulHome {
  #     description {
  #       raw
  #     }
  #     title
  #   }
  # }
`
