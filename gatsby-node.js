const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const Projects = await graphql(`
  query ProjectQuery {
    allContentfulProject {
      nodes {
        slug
      }
    }
  }
  `)
  Projects.data.allContentfulProject.nodes.forEach((node) => {
    actions.createPage({
      path: `/projects/${node.slug}`,
      component: path.resolve("./src/templates/project.jsx"),
      context: { slug: node.slug },
    })
  })
}
