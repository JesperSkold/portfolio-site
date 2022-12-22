import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { useState } from "react"

import Project from "../components/Project"

const Projects = styled.main``

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
  console.log(projects)
  return (
    <Layout background={data.contentfulProjectsPage.backgroundImage.file.url}>
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
