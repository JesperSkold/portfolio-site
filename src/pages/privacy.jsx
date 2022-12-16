import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StyledMain } from "../components/styles/reusables"
const Privacy = ({ data }) => {
  return (
    <Layout>
      <StyledMain>
        <h1>{data.contentfulPrivacy.title}</h1>
        <p>{data.contentfulPrivacy.description.description}</p>
      </StyledMain>
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
