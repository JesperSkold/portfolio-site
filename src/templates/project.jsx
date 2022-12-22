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
`

const Project = ({ data }) => {
  const project = data.contentfulProject
  console.log("yo", data)
  return (
    <Layout>
      <Background background={data.contentfulSingleProjectPage.backgroundImage.file.url} position={"10% 50%"}/>
      <Wrapper>
        <h1>{project.title}</h1>
        <ImageContainer>
        {/* <GatsbyImage image={getImage(project.thumbnail)} alt="" /> */}
        <GatsbyImage image={getImage(project.image1)} alt="" />
        <GatsbyImage image={getImage(project.image2)} alt="" />
        </ImageContainer>
      </Wrapper>
    </Layout>
  )
}

export default Project

export const Head = () => <title>Dynamiskt</title>

export const query = graphql`
  query ProjectQuery($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      title
      repository
      deployedSite
      longDescription {
        longDescription
      }
      thumbnail {
        gatsbyImageData(formats: WEBP, height: 400)
      }
      image1 {
        gatsbyImageData(formats: WEBP, width:700)
      }
      image2 {
        gatsbyImageData(formats: WEBP, width:700)
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
