import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import colors from "../theme/colors"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Wrapper } from "../components/styles/reusables"
import { Background } from "../components/styles/reusables"
const ImageContainer = styled.div`
img{
}
display: flex;
flex-direction: column;
align-items: center;
margin: 5rem 0;
gap: 2rem;
`

const Project = ({ data }) => {
  const project = data.contentfulProject
  console.log("yo", data)
  return (
    <Layout>
      <Background background={data.contentfulSingleProjectPage.backgroundImage.file.url} position={"10% 50%"}/>
      <Wrapper>
        <h1>{project.title}</h1>
        <p>{project.longDescription.longDescription}</p>
        <div>
        <p>Built with: </p>
        <p>GitHub</p>
        <p>Site</p>
        </div>
        <ImageContainer>
          {project.images.map((img) => 
          <GatsbyImage image={getImage(img.gatsbyImage)} alt="" />
          )}
        </ImageContainer>
      </Wrapper>
    </Layout>
  )
}

export default Project

export const Head = ({data}) => <title>{data.contentfulProject.title}</title>

export const query = graphql`
  query ProjectQuery($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      title
    repository
    deployedSite
    longDescription {
      longDescription
    }
    images {
      gatsbyImage(formats: WEBP, width: 1000)
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
