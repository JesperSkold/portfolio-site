import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import { Background } from "../components/styles/reusables"
import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"

const Container = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 1080px) {
    margin: 0 2rem;
  }
  @media (max-width: 550px) {
    align-items: center;
  }
  img {
    width: 14rem;
    height: 14rem;
    background: radial-gradient(circle at center, white 80%, transparent 61%);
    border-radius: 50%;
    border: 2px solid white;
  }
  p {
    margin: 0;
  }
  a {
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
  }
  a:last-child {
    margin-top: 1.5rem;
  }
  h1 {
    margin-top: 0;
  }
  h2 {
    font-size: 36px;
  }
`

const Info = styled.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 550px) {
    width: 70%;
    h2 {
      text-align: center;
    }
  }
  svg {
    min-width: 2rem;
    min-height: 2rem;
    margin-right: 1rem;
  }
`

const Contact = ({ data }) => {
  const contact = data.contentfulContact
  return (
    <Layout>
      <Background
        background={contact.backgroundImage.file.url}
        position={"70%"}
      />
      <Container>
        <h1>{contact.title}</h1>
        <Info>
          <img src={contact.avatar.file.url} alt="Avatar of Jesper" />
          <Links>
            <h2>{contact.subtitle}</h2>
            <a href={`mailto:${contact.email}`}>
              <FaRegEnvelope />
              <p>Send me an email</p>
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
              <p>Connect with me on LinkedIn</p>
            </a>
          </Links>
        </Info>
      </Container>
    </Layout>
  )
}

export default Contact

export const Head = ({ data }) => (
  <title>{data.contentfulContact.title}</title>
)

export const ContactPageQuery = graphql`
  query {
    contentfulContact {
      backgroundImage {
        file {
          url
        }
      }
      avatar {
        file {
          url
        }
      }
      title
      subtitle
      email
      github
      linkedin
    }
  }
`
