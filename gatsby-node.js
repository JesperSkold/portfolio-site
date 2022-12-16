const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const books = await graphql(`
    query MyQuery {
      allContentfulBook {
        nodes {
          slug
          id
        }
      }
    }
  `)
  books.data.allContentfulBook.nodes.forEach((node) => {
    actions.createPage({
      path: `/book/${node.id}/${node.slug}`,
      component: path.resolve("./src/templates/book.jsx"),
      context: { id: node.id },
    })
  })

  const genre = await graphql(`
  query MyQuery {
    allContentfulGenre {
     nodes {
       slug
       id
     }
   }
  }
`)
genre.data.allContentfulGenre.nodes.forEach((node) => {
  actions.createPage({
    path:`/books/${node.slug}`,
    component: path.resolve("./src/templates/genre.jsx"),
    context: {id: node.id}
  })
})

}
