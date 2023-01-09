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
`

const AboutContainer = styled.div`
  display: flex;
  gap: 3rem;
`
const FirstColumn = styled.div``
const SecondColumn = styled.div`
  margin-top: 0.7rem;
  h2:first-child {
    margin-top: 0.4rem;
    margin-bottom: 0;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
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
        <AboutContainer>
          <FirstColumn>
            <h1>{about.subtitle}</h1>
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
