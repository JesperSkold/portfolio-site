import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { useState } from "react"
import { Wrapper } from "../components/styles/reusables"
import Project from "../components/Project"
import { Background } from "../components/styles/reusables"

const Projects = styled.main``

const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const Category = styled.h3`
  border-bottom: ${({ highlight }) => highlight && "3px solid #6C50F6"};
  cursor: pointer;
  padding: 3px;
  margin: 0 -3px;
`
const ProjectsPage = ({ data }) => {
  const projects = data.allContentfulProject.nodes
  const categories = data.allContentfulCategory.nodes
  const [filter, setFilter] = useState(null)
  const [highlight, setHighlight] = useState()
  return (
    <Layout background={data.contentfulProjectsPage.backgroundImage.file.url}>
      <Background
        background={data.contentfulProjectsPage.backgroundImage.file.url}
      />
      <Wrapper>
        <h1>{data.contentfulProjectsPage.title}</h1>
        <Categories>
          <Category
            onClick={(e) => {
              setFilter(null)
              setHighlight(e.target.innerText)
            }}
            highlight={filter === null}
          >
            All
          </Category>
          {categories.map((category) => (
            <Category
              key={category.category}
              onClick={(e) => {
                setFilter(e.target.innerText)
                setHighlight(e.target.innerText)
              }}
              highlight={category.category === highlight}
            >
              {category.category}
            </Category>
          ))}
        </Categories>
        <Projects>
          {projects.map((project) =>
            project.category.map((category) =>
              category.category === filter ? (
                <Project key={project.title} project={project} />
              ) : (
                filter === null && (
                  <Project key={project.title} project={project} />
                )
              )
            )
          )}
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
    allContentfulProject(sort: { updatedAt: DESC }) {
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
