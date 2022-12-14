import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const About = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <h1>{data.contentfulAbout.title}</h1>
      <p>{data.contentfulAbout.description.description}</p>
    </Layout>
  )
}

export default About

export const AboutPageQuery = graphql`
query {
  contentfulAbout {
    title
    description {
      description
    }
  }
}
`
