import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const Privacy = ({ data }) => {
  return (
    <Layout>
      <h1>{data.contentfulPrivacy.title}</h1>
      <p>{data.contentfulPrivacy.description.description}</p>
    </Layout>
  )
}

export default Privacy

export const PrivacyPageQuery = graphql`
  query {
    contentfulPrivacy {
      description {
        description
      }
      title
    }
  }
`
