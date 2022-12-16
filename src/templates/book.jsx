import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import colors from "../theme/colors"
import { Button } from "../components/styles/reusables"
const BookMetaContainer = styled.aside`
  background-color: ${colors.secondaryLight};
  color: white;
  p {
    padding: 0.5rem 1rem;
  }
  height: fit-content;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    p {
      padding: 0 1rem;
    }
  }
  img {
    width: 100%;
  }
`
const BookMainInfo = styled.div`
  margin: 0 2rem;
  width: 80%;
  h1 {
    margin: 0;
  }
  div {
    display: flex;
    align-items: center;

    button {
      margin-left: 2rem;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const BookContainer = styled.section`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Wrapper = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`

const AuthorBook = styled.article`
  margin: 0 1rem;

  img {
    width: auto;
    height: 300px;
  }
`

const BooksByAuthor = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h1 {
    /* margin-top: 0; */
    text-align: center;
  }

  a {
    color: black;
    text-decoration: none;
  }
`

const RelatedBooks = styled.section``

const Book = ({ data }) => {
  console.log("yo", data)
  const book = data.contentfulBook
  // const [first, setfirst] = useState(second)

  const otherBooks = book.author.map((authorInfo) =>
    authorInfo.book.map(
      (authorBook) =>
        book.title !== authorBook.title && (
          <Link to={`/book/${authorBook.id}/${authorBook.slug}`} key={book.id}>
            <AuthorBook>
              <h1>{authorBook.title}</h1>
              <img src={authorBook.image.file.url} />
            </AuthorBook>
          </Link>
        )
    )
  )
  console.log(otherBooks, "otöer");
  return (
    <Layout>
      <Wrapper>
        <BookContainer>
          <BookMetaContainer>
            <img src={book.image.file.url} alt={book.title} />
            <div>
              <p>
                <b>Pages:</b> {book.pages}
              </p>
              <p>
                <b>Language:</b> {book.language}
              </p>
              <p>
                <b>Format:</b> {book.format}
              </p>
              <p>
                <b>Dimensions:</b> {book.dimensions}
              </p>
              <p>
                <b>Publisher:</b> {book.publisher}
              </p>
              <p>
                <b>Weigth:</b> {book.weight}
              </p>
              <p>
                <b>Publication Date:</b> {book.publicationDate}
              </p>
              <p>
                <b>ISBN:</b> {book.isbn}
              </p>
            </div>
          </BookMetaContainer>
          <BookMainInfo>
            <h1>{book.title}</h1>
            <p>{book.subtitle && book.subtitle}</p>
            <h3>By: {book.author.map((author) => author.name)}</h3>
            {book.genre && (
              <p>
                <b>Genre:</b> {book.genre.map((genre) => genre.genre)}
              </p>
            )}
            <div>
              <h1>{book.price}€</h1>
              <Button>Buy</Button>
            </div>
            <p>{book.description.description}</p>
          </BookMainInfo>
          {/* <RelatedBooks> */}
            {/* remove and clean up, stick with books by author? */}
            {/* {book.genre && (
              <>
                <h3>
                  Check out other {book.genre.map((genre) => genre.genre)} books
                </h3>
                {book.genre.map((genre) =>
                  genre.book.map(
                    (genreBook) =>
                      genreBook.author.map(
                        (author) =>
                          !author.name.includes(
                            book.author.map((author) => author.name)
                          )
                      )[0] &&
                      genre.genre ===
                        book.genre.map((genre) => genre.genre)[0] && (
                        <>
                          {console.log("yea")}
                          <p>{genreBook.title}</p>
                          <img
                            src={genreBook.image.file.url}
                            alt={genreBook.title}
                          />
                        </>
                      )
                  )
                )}
              </>
            )} */}
          {/* </RelatedBooks> */}
        </BookContainer>
        {console.log("laa", otherBooks.length)}
        {otherBooks[0].length > 1 && (
          <>
            <h2>Other books by {book.author.map((author) => author.name)}:</h2>
            <BooksByAuthor>
              {otherBooks}
            </BooksByAuthor>
          </>
        )}
      </Wrapper>
    </Layout>
  )
}

export default Book

export const Head = () => <title>Dynamiskt</title>

export const query = graphql`
  query BookQuery($id: String) {
    contentfulBook(id: { eq: $id }) {
      title
      weight
      subtitle
      publisher
      publicationDate
      price
      pages
      language
      isbn
      format
      dimensions
      description {
        description
      }
      author {
        name
        bio {
          bio
        }
        book {
          image {
            file {
              url
            }
          }
          title
          slug
          id
        }
      }
      image {
        file {
          url
        }
      }
      genre {
        genre
        book {
          title
          image {
            file {
              url
            }
          }
          author {
            name
          }
        }
      }
    }
  }
  #     title
  #     weight
  #     subtitle
  #     publisher
  #     publicationDate
  #     price
  #     pages
  #     language
  #     isbn
  #     format
  #     dimensions
  #     description {
  #       description
  #     }
  #     author {
  #       name
  #       bio {
  #         bio
  #       }
  #       book {
  #         image {
  #           file {
  #             url
  #           }
  #         }
  #         id
  #         title
  #         slug
  #       }
  #     }
  #     image {
  #       file {
  #         url
  #       }
  #     }
  #     # genre
  #   }
  # }
`
