import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import colors from "../theme/colors"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button } from "../components/styles/reusables"
import { Background } from "../components/styles/reusables"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import "../theme/carouselStyles.css"
import { Seo } from "../components/Seo"

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  h1 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 16px;
  }
  background: ${colors.primaryTransparent};
  padding-bottom: 1.2rem;
`

const AboutContainer = styled.div`
  a{
    color: white;
  }

  .carousel-root{
    @media (max-width: 750px) {
      padding: 0;
    }
  }
  & > * {
    padding: 0 1.2rem;
  }
`

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  a {
    font-weight: bold;
  }
`

const Technology = styled.p`
  padding: 0.8rem;
  background: ${colors.secondary};
  border-radius: 0.8rem;
  margin: 0;
`
const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`

const Project = ({ data }) => {
  const project = data.contentfulProject
  return (
    <Layout navType={colors.primaryTransparent}>
      <Background
        background={data.contentfulSingleProjectPage.backgroundImage.file.url}
        position={"10% 50%"}
      />
      <Wrapper>
        <AboutContainer>
          <h1>{project.title}</h1>
          <Carousel showThumbs={false} useKeyboardArrows={true} autoPlay={true} interval={5500}>
          {project.images.map((img) => (
            <GatsbyImage
              image={getImage(img.gatsbyImage)}
              alt={`Image of Jesper's ${project.title} project`}
              key={img.gatsbyImage}
            />
          ))}
        </Carousel>
          {documentToReactComponents(JSON.parse(project.longDescription.raw))}
          <h2>Tools and Technologies</h2>
          <TechStack>
            {project.techStack.map((technology) => (
              <Technology key={technology}>{technology}</Technology>
            ))}
          </TechStack>
          <h2>Links</h2>
          <Links>
            {project.deployedSite && (
              <a href={project.deployedSite} target="_blank" rel="noreferrer">
                <Button>Deployed Site</Button>
              </a>
            )}
            <a href={project.repository} target="_blank" rel="noreferrer">
              <Button>GitHub Repository</Button>
            </a>
          </Links>
        </AboutContainer>
      </Wrapper>
    </Layout>
  )
}

export default Project

export const Head = ({ data }) => (
  <Seo
    title={`${data.contentfulProject.title} - Jesper Olsson`}
    description={data.contentfulProject.seoDescription}
    image={data.contentfulProject.thumbnail.file.url}
  />
)

export const query = graphql`
  query ProjectQuery($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      title
      repository
      deployedSite
      techStack
      longDescription {
        raw
      }
      seoDescription
      images {
        gatsbyImage(formats: WEBP, width: 1000, height: 700)
      }
      thumbnail {
        file {
          url
        }
      }
    }
    contentfulSingleProjectPage {
      backgroundImage {
        file {
          url
        }
      }
    }
  }
`
