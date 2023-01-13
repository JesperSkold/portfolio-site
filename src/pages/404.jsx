import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { Background } from "../components/styles/reusables"
import styled from "styled-components"
import { Button } from "../components/styles/reusables"
import { Seo } from "../components/Seo"
const Wrapper = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  h1 {
    margin: 0;
  }
  a {
    color: white;
  }
`

const NotFoundPage = ({ data }) => {
  const error = data.contentfulFourOhFour
  return (
    <Layout>
      <Background
        background={error.backgroundImage.file.url}
        position={"50% 100%"}
      />
      <Wrapper>
        <h1>{error.title}</h1>
        <h2>{error.subtitle}</h2>
        <Link to="/">
          <Button>Back To Home</Button>
        </Link>
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage

export const Head = ({data}) => <Seo title={data.contentfulFourOhFour.title} description={data.contentfulFourOhFour.subtitle}/>

export const query = graphql`
  query NotFoundPageQuery {
    contentfulFourOhFour {
      backgroundImage {
        file {
          url
        }
      }
      title
      subtitle
    }
  }
`
