import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import colors from "../theme/colors"
import { Button } from "../components/styles/reusables"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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

  /* img {
    width: auto;
    height: 300px;
  } */
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

const Project = ({ data }) => {
  console.log("yo", data)
  const book = data.contentfulBook
  // const [first, setfirst] = useState(second)
  return (
    <Layout>
      <Wrapper>
        <BookContainer>
          <BookMetaContainer></BookMetaContainer>
          <BookMainInfo></BookMainInfo>
        </BookContainer>

        <BooksByAuthor></BooksByAuthor>
      </Wrapper>
    </Layout>
  )
}

export default Project

export const Head = () => <title>Dynamiskt</title>

// export const query = graphql`
// `
