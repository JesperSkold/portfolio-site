import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { StyledMain } from "../components/styles/reusables";

const About = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <StyledMain>
      <h1>{data.contentfulAbout.title}</h1>
      <p>{data.contentfulAbout.description.description}</p>
      </StyledMain>
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
