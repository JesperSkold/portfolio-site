import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StyledMain } from "../components/styles/reusables"
import styled from "styled-components"

const StyledForm = styled.form`
  width: 50%;
  @media (max-width: 768px) {
    width: 75%;
    }
  input,
  textarea {
    padding: 0.5rem;
    margin: 1rem 0;
  }

  button {
    padding: 1rem;
    width: inherit;
  }
`

const InputContainer = styled.div`
  gap: 1rem;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`

const TextAreaContainer = styled.div`
  label {
    display: block;
  }
  textarea {
    box-sizing:border-box;
    width: 100%;

  }
`

const Contact = ({ data }) => {
  return (
    <Layout>
      <StyledMain>
        <h1>{data.contentfulContact.title}</h1>
        <p>{data.contentfulContact.description.description}</p>
        <StyledForm action="">
          <InputContainer>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" htmlFor="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" htmlFor="email" />
            </div>
          </InputContainer>
          <TextAreaContainer>
            <label htmlFor="">Your message</label>
            <textarea name="" id="" cols="10" rows="10"></textarea>
          </TextAreaContainer>
          <button>Send</button>
        </StyledForm>
      </StyledMain>
    </Layout>
  )
}

export default Contact

export const ContactPageQuery = graphql`
  query {
    contentfulContact {
      description {
        description
      }
      title
    }
  }
`
