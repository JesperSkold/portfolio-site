import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { Background } from "../components/styles/reusables"

const Container = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  img {
    width: 16rem;
    align-self: center;
    background: radial-gradient(circle at center, white 80%, transparent 61%);
    border-radius: 50%;
    border: 2px solid white;
  }
  a {
    color: white;
    font-size: 24px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
  }
  h1{
    margin-top: 0;
  }
  h2{
    margin-bottom: 0;
  }
`
const Contact = ({ data }) => {
  const contact = data.contentfulContact
  return (
    <Layout>
      <Background
        background={contact.backgroundImage.file.url}
        position={"60%"}
      />
      <Container>
        <h1>{contact.title}</h1>
        <img src={contact.avatar.file.url} alt="" />
        <h2>
          <a href={`mailto:${contact.email}`}>Email</a>
        </h2>
        <h2>
          <a href={contact.github}>GitHub</a>
        </h2>
        <h2>
          <a href={contact.linkedin}>LinkedIn</a>
        </h2>
      </Container>
    </Layout>
  )
}

export default Contact

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
      email
      github
      linkedin
    }
  }
`
