import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StyledMain } from "../components/styles/reusables"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

const IndexPage = ({ data }) => {
  console.log(data, "INDEX")
  return (
    <Layout>
      <StyledMain>
        <h1>{data.contentfulHome.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(
              JSON.parse(data.contentfulHome.description.raw)
            ),
          }}
        ></div>
      </StyledMain>
    </Layout>
  )
}

export default IndexPage

export const IndexPagePageQuery = graphql`
  query {
    contentfulHome {
      description {
        raw
      }
      title
    }
  }
`
