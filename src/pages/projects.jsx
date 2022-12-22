import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useState } from "react"
import { Button } from "../components/styles/reusables"

export const Projects = styled.main``

export const Project = styled.article`
  display: flex;
  justify-content: center;
  margin: 5rem 0;
  gap: 1rem;

  &:first-child {
    margin-top: 3rem;
  }
  img {
    object-position: center top;
    max-height: 200px;
  }
  h3 {
    margin: 0;
  }
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
`

const Category = styled.h3`
  border-bottom: ${({ highlight }) => highlight && "3px solid #6C50F6"};
  cursor: pointer;
  padding: 3px;
  margin: 0 -3px;
`

const ProjectInfo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
`

const Links = styled.div`
  align-self: flex-end;
  margin-left: auto;
  a {
    margin: 0 0.5rem;
  }
  span {
    vertical-align: bottom;
    font-size: 2rem;
    color: white;
  }
`

const LinkContainer = styled.div`
  margin-top: auto;
  display: flex;
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
                <Project key={project.title}>
                  <ProjectInfo>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <Description>{project.shortDescription}</Description>
                    <LinkContainer>
                      <Button>Read more</Button>
                      <Links>
                        {project.deployedSite && (
                          <Link to={project.deployedSite}>
                            <span
                              className="material-symbols-outlined"
                              title="Deployed Site"
                            >
                              open_in_new
                            </span>
                          </Link>
                        )}
                        <Link to={project.repository}>
                          <span
                            className="material-symbols-outlined"
                            title="GitHub Repository"
                          >
                            folder_open
                          </span>
                        </Link>
                      </Links>
                    </LinkContainer>
                  </ProjectInfo>
                  <GatsbyImage image={getImage(project.thumbnail)} alt="" />
                </Project>
              ) : (
                filter === null && (
                  <Project key={project.title}>
                    <ProjectInfo>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <Description>{project.shortDescription}</Description>
                      <LinkContainer>
                        <Button>Read more</Button>
                        <Links>
                          {project.deployedSite && (
                            <Link to={project.deployedSite}>
                              <span
                                className="material-symbols-outlined"
                                title="Deployed Site"
                              >
                                open_in_new
                              </span>
                            </Link>
                          )}
                          <Link to={project.repository}>
                            <span
                              className="material-symbols-outlined"
                              title="GitHub Repository"
                            >
                              folder_open
                            </span>
                          </Link>
                        </Links>
                      </LinkContainer>
                    </ProjectInfo>
                    <GatsbyImage image={getImage(project.thumbnail)} alt="" />
                  </Project>
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
