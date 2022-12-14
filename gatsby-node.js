const path = require("path")

exports.createPages = async ({graphql, actions}) => {
  const { data } = await graphql(`
    query MyQuery {
      allContentfulBook {
        nodes {
          slug
          id
        }
      }
    }
  `)
  data.allContentfulBook.nodes.forEach((node) => {
    actions.createPage({
      path: `/book/${node.id}/${node.slug}`,
      component: path.resolve("./src/templates/book.jsx"),
      context: { slug: node.id },
    })
  })
}
