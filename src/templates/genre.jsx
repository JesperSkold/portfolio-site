import React from "react"
import { graphql } from "gatsby"
import { Book } from "../pages/books"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import colors from "../theme/colors"

const Genres = styled.aside`
/* display: flex;
flex-direction: column;
width: 40%; */
background: ${colors.secondaryLight};
/* padding: 3rem; */
h3{
  margin: 0;
  /* margin-top: 5rem; */
}
padding: 0 2rem 2rem 1rem;
margin-left: auto;
height: fit-content;
min-width: 20%;
/* text-align: center; */
color: white;

a{
  color: white;
}
`

const Wrapper = styled.div`
  max-width: 1000px;
  display: grid;
  margin: 2rem auto;
  display: flex;
  div h1{
    /* text-align: center; */
  }
`

const BookContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  a {
    text-decoration: none;
    color: black;
  }
`

const Genre = ({ data }) => {
  const bookGenre = data.contentfulGenre
  const genres = data.allContentfulGenre
  console.log(data, "genre data")
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1>{bookGenre.genre}</h1>
          <BookContainer>
            {bookGenre.book.map((book) => (
              <Link to={`/book/${book.id}/${book.slug}`}>
                <Book>
                  <img src={book.image.file.url} alt="" />
                  <h3>{book.title}</h3>
                  <h4>{book.author.map((author) => author.name)}</h4>
                  <p>€{book.price}</p>
                </Book>
              </Link>
            ))}
          </BookContainer>
        </div>
        <Genres>
          {genres.nodes.map(
            (genre) =>
              genre.book &&
              genre.genre !== bookGenre.genre && (
                <>
                <h2>Other genres:</h2>
                <Link to={`/books/${genre.slug}`}>
                  <h3>
                    {genre.genre}({genre.book.length})
                  </h3>
                </Link>
              </>
              )
          )}
        </Genres>
      </Wrapper>
    </Layout>
  )
}

export default Genre

export const Head = () => <title>Dynamiskt</title>

export const query = graphql`
  query GenreQuery($id: String) {
    contentfulGenre(id: { eq: $id }) {
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
      genre
      id
    }
    allContentfulGenre {
      nodes {
        genre
        id
        slug
        book {
          title
        }
      }
    }
  }
  #   allContentfulGenre(filter: { id: { eq: $id } }) {
  #     nodes {
  #       genre
  #       id
  #       book {
  #         author {
  #           name
  #         }
  #         title
  #         slug
  #         price
  #         id
  #         image {
  #           file {
  #             url
  #           }
  #         }
  #       }
  #     }
  #   }
  # }
`
