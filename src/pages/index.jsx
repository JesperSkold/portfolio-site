import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Link to="/books">Books</Link>
      <h1>home</h1>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
