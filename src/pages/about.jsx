import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Background } from "../components/styles/reusables"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

const Container = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  h1 {
    margin: 0;
    font-size: 48px;
  }
  h2 {
    font-size: 36px;
  }
  @media (max-width: 1080px) {
    max-width: 500px;
    padding: 0 2rem;
  }
`

const AboutContainer = styled.div`
  display: flex;
  gap: 3rem;
  h2 {
    margin-bottom: 0;
  }
  @media (max-width: 1080px) {
    gap: 0;
    display: flex;
    flex-direction: column;
  }
  div {
    @media (max-width: 1080px) {
      display: flex;
      flex-direction: column;
    }
  }
`
const FirstColumn = styled.div``
const SecondColumn = styled.div`
  margin-top: -3.2rem;
  /* margin-top: 0.7rem; */
  h2:first-child {
    margin-top: 0.4rem;
  }
  @media (max-width: 1080px) {
    margin-top: 30px;
    }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 16px;
  }
`
const About = ({ data }) => {
  const about = data.contentfulAbout
  return (
    <Layout>
      <Background
        background={about.backgroundImage.file.url}
        position={"100% 30%"}
      />
      <Container>
        <h1>{about.title}</h1>
        <h1>{about.subtitle}</h1>
        <AboutContainer>
          <FirstColumn>
            {documentToReactComponents(JSON.parse(about.introduction.raw))}
            {documentToReactComponents(JSON.parse(about.education.raw))}
          </FirstColumn>
          <SecondColumn>
            {documentToReactComponents(JSON.parse(about.experience.raw))}
            <h2>Skills</h2>
            <div>
              {about.skills.map((icon) => (
                <img key={icon.file.url} src={icon.file.url} height="50px" />
              ))}
            </div>
          </SecondColumn>
        </AboutContainer>
      </Container>
    </Layout>
  )
}

export default About

export const AboutPageQuery = graphql`
  query {
    contentfulAbout {
      title
      subtitle
      backgroundImage {
        file {
          url
        }
      }
      introduction {
        raw
      }
      education {
        raw
      }
      experience {
        raw
      }
      skills {
        file {
          url
        }
      }
    }
  }
`
