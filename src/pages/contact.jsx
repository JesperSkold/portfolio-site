import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const Contact = ({ data }) => {
  return (
    <Layout>
      <h1>{data.contentfulContact.title}</h1>
      <p>{data.contentfulContact.description.description}</p>
    </Layout>
  )
}

export default Contact

export const ContactPageQuery = graphql`
  query {
    contentfulContact {
      description {
        description
      }
      title
    }
  }
`
