import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1>{data.contentfulHome.title}</h1>
      <p>{data.contentfulHome.description.description}</p>
    </Layout>
  )
}

export default IndexPage

export const IndexPagePageQuery = graphql`
  query {
    contentfulHome {
      description {
        description
      }
      title
    }
  }
`
