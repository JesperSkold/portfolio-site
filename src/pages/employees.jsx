import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StyledMain } from "../components/styles/reusables"
const Employees = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data.allContentfulEmployees.nodes.map((employee) => (
        <StyledMain key={employee.id}>
          <h1>{employee.name}</h1>
          <p>{employee.description.description}</p>
        </StyledMain>
      ))}
    </Layout>
  )
}

export default Employees

export const EmployeesPageQuery = graphql`
  query {
    allContentfulEmployees {
      nodes {
        name
        id
        description {
          description
        }
      }
    }
  }
`
