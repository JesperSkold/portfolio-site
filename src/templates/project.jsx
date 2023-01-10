import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import colors from "../theme/colors"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Wrapper } from "../components/styles/reusables"
import { Background } from "../components/styles/reusables"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../theme/carouselStyles.css"

const AboutContainer = styled.div`
  background: ${colors.primaryTransparent};
  padding: 0 2rem 2rem 2rem;
  h1 {
    margin: 0;
  }
`

const Links = styled.div`
  display: flex;
  gap: 1rem;
  a {
    font-weight: bold;
    color: white;
    margin-top: 1rem;
  }
`

const Technology = styled.p`
  padding: 0.8rem;
  background: #6c50f6;
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
    <Layout>
      <Background
        background={data.contentfulSingleProjectPage.backgroundImage.file.url}
        position={"10% 50%"}
      />
      <Wrapper>
        <AboutContainer>
          <h1>{project.title}</h1>
          <p>{project.longDescription.longDescription}</p>
          <h2>Tools and Technologies</h2>
          <TechStack>
            {project.techStack.map((technology) => (
              <Technology key={technology}>{technology}</Technology>
            ))}
          </TechStack>
          <Links>
            <a href={project.repository}>GitHub Repository</a>
            {project.deployedSite && (
              <a href={project.deployedSite}>Deployed Site</a>
            )}
          </Links>
        </AboutContainer>
          <Carousel showThumbs={false} useKeyboardArrows={true} autoPlay={true}>
            {project.images.map((img) => (
                <GatsbyImage
                  image={getImage(img.gatsbyImage)}
                  alt=""
                  key={img.gatsbyImage}
                />
            ))}
          </Carousel>
      </Wrapper>
    </Layout>
  )
}

export default Project

export const Head = ({ data }) => <title>{data.contentfulProject.title}</title>

export const query = graphql`
  query ProjectQuery($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      title
      repository
      deployedSite
      techStack
      longDescription {
        longDescription
      }
      images {
        gatsbyImage(formats: WEBP, width: 1000, height: 700)
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
