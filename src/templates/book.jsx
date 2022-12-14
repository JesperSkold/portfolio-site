import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const Book = ({ data }) => {
  const book = data.contentfulBook
  return (
      <Layout>
        <h1>{book.title}</h1>
      </Layout>
  )
}

export default Book

export const Head = () => <title>Dynamiskt</title>

export const query = graphql`
  query BookQuery($id: String) {
    contentfulBook(id: { eq: $id }) {
      title
    }
  }
`
