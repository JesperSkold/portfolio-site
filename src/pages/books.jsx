import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { StyledMain } from "../components/styles/reusables"

export const BookContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  a {
    text-decoration: none;
    color: black;
  }
`

export const Book = styled.article`
  text-align: center;
  margin: 1rem;

  h2,
  h4 {
    margin: 0;
  }

  img{
    height: 300px;
    width: 200px;
  }
  width: 200px;
`

const BooksPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <StyledMain>
        {/* <h1>Books</h1> */}
        {data.allContentfulGenre.nodes.map((genre) => (
          <>
            { genre.book && <Link to={`/books/${genre.slug}`}>
              <h1>{genre.genre}</h1>
              <h3>View more {genre.genre} books{" >"}</h3>
            </Link>}
            <BookContainer>
              {genre.book &&
                genre.book.map((book) => (
                  <Link to={`/book/${book.id}/${book.slug}`}>
                    <Book>
                      <img src={book.image.file.url} alt="" />
                      <h2>{book.title}</h2>
                      <h4>{book.author.map((author) => author.name)}</h4>
                      <p>€{book.price}</p>
                    </Book>
                  </Link>
                ))}
            </BookContainer>
          </>
        ))}
        {/* {data.allContentfulGenre.distinct.map((distinctGenre) => 
            data.allContentfulBook.nodes.map((book) => book.genre.map((genre) =>
            genre.genre === distinctGenre && 
            <>
             <Link to={`/book/${book.id}/${book.slug}`} key={book.id}>
              <Book>
                <img src={book.image.file.url} alt="" />
                <h2>{book.title}</h2>
                <h4>{book.author.map((author) => author.name)}</h4>
                <p>{book.price}€</p>
              </Book>
            </Link>
            </>)))} */}
        {/* {data.allContentfulBook.nodes.map((book) => (
            <Link to={`/book/${book.id}/${book.slug}`} key={book.id}>
              <Book>
                <img src={book.image.file.url} alt="" />
                <h2>{book.title}</h2>
                <h4>{book.author.map((author) => author.name)}</h4>
                <p>{book.price}€</p>
              </Book>
            </Link>
          ))} */}
      </StyledMain>
    </Layout>
  )
}

export default BooksPage

export const Head = () => <title>Home Page</title>

export const BooksPageQuery = graphql`
  query {
    allContentfulGenre {
      nodes {
        genre
        slug
        book {
          author {
            name
          }
          title
          slug
          price
          id
          image {
            file {
              url
            }
          }
        }
      }
    }
  }
  #   allContentfulBook {
  #     nodes {
  #       author {
  #         name
  #       }
  #       title
  #       description {
  #         description
  #       }
  #       image {
  #         file {
  #           url
  #         }
  #       }
  #       isbn
  #       language
  #       pages
  #       price
  #       publisher
  #       publicationDate
  #       weight
  #       id
  #       slug
  #       genre{
  #         genre
  #       }
  #     }
  #   }
  #   allContentfulGenre {
  #     distinct(field: { genre: SELECT })
  #   }
  # }
`
