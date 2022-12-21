import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const Projects = styled.main``

export const Project = styled.article`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
  gap: 1rem;

  &:first-child{
    margin-top: 0;
  }
  img {
    object-position: center top;
  }
  h3{
    margin-top: 0;
  }
`
const TextContainer = styled.div`
  width: 30%;
  overflow-wrap: break-word;
`

const ProjectTitle = styled.h3``

const Description = styled.p``

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  h1 {
    text-align: center;
    margin-bottom: 0;
  }
`

const Categories = styled.div`
display: flex;
justify-content: center;
gap: 1rem;
h3:first-child{
  border-bottom: 1px solid white;
}
`

const ProjectsPage = ({ data }) => {
  const projects = data.allContentfulProject.nodes
  const categories = data.allContentfulCategory.nodes
  console.log(data)
  return (
    <Layout background={data.contentfulProjectsPage.backgroundImage.file.url}>
      <Wrapper>
        <h1>{data.contentfulProjectsPage.title}</h1>
        <Categories>
          <h3>All</h3>
          {categories.map((category) => (
            <h3>{category.category}</h3>
          ))}
        </Categories>
        <Projects>
          {projects.map((project) => (
            <Project key={project.title}>
              <TextContainer>
                <ProjectTitle>{project.title}</ProjectTitle>
                <Description>{project.shortDescription}</Description>
              </TextContainer>
              <GatsbyImage image={getImage(project.thumbnail)} alt="" />
            </Project>
          ))}
        </Projects>
      </Wrapper>
    </Layout>
  )
}

export default ProjectsPage

export const Head = ({ data }) => (
  <title>{data.contentfulProjectsPage.title}</title>
)

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
        thumbnail {
          gatsbyImageData(formats: WEBP, width: 375, height: 200)
        }
      }
    }
    contentfulProjectsPage {
      backgroundImage {
        file {
          url
        }
      }
      title
    }
    allContentfulCategory {
      nodes {
        category
      }
    }
  }
`
