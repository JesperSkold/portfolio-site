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

  img {
    height: 300px;
    width: 200px;
  }
  width: 200px;
`

const ProjectsPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <StyledMain>
        <BookContainer>
          <Book></Book>
        </BookContainer>
      </StyledMain>
    </Layout>
  )
}

export default ProjectsPage

export const Head = () => <title>Home Page</title>

export const query = graphql`
  query ProjectsQuery {
    allContentfulProject {
      nodes {
        repository
        shortDescription
        slug
        title
        deployedSite
        category {
          category
        }
        image1 {
          gatsbyImageData(height: 300, formats: WEBP)
        }
        image2 {
          gatsbyImageData(height: 300, formats: WEBP)
        }
        thumbnail {
          gatsbyImageData(height: 300, formats: WEBP)
        }
      }
    }
  }
`
