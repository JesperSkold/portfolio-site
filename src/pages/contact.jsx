import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { Background } from "../components/styles/reusables"



const Contact = ({ data }) => {
  const contact = data.contentfulContact
  return (
    <Layout>
      <Background background={contact.backgroundImage.file.url} position={"100%, 50%"}></Background>
        <h1>{contact.title}</h1>
    </Layout>
  )
}

export default Contact

export const ContactPageQuery = graphql`
  query {
    contentfulContact {
      title
      backgroundImage {
        file {
          url
        }
      }
    }
  }
`
