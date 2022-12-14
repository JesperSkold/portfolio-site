import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const BookContainer = styled.main`
  display: flex;
  flex: auto;
  justify-content: space-around;
`

const Book = styled.article`
  text-align: center;
`

const BooksPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Link to="/">Till startsidan</Link>
      <BookContainer>
        <h1>Books</h1>
        {data.allContentfulBook.nodes.map((book) => (
          <Link to={`/book/${book.id}/${book.slug}`}>
            <Book key={book.id}>
              <h2 key={book.id}>{book.title}</h2>
              <img src={book.image.file.url} alt="" />
            </Book>
          </Link>
        ))}
      </BookContainer>
    </Layout>
  )
}

export default BooksPage

export const Head = () => <title>Home Page</title>

export const BooksPageQuery = graphql`
  query {
    allContentfulBook {
      nodes {
        author {
          name
        }
        title
        description {
          description
        }
        image {
          file {
            url
          }
        }
        isbn
        language
        pages
        price
        publisher
        publicationDate
        weight
        id
        slug
      }
    }
  }
`
