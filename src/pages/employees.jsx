import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const Employees = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      {data.allContentfulEmployees.nodes.map((employee) => (
        <>
          <h1>{employee.name}</h1>
          <p>{employee.description.description}</p>
        </>
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
        description {
          description
        }
      }
    }
  }
`
