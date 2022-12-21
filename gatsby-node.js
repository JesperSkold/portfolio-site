const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const books = await graphql(`
//     query MyQuery {
//       allContentfulBook {
//         nodes {
//           slug
//           id
//         }
//       }
//     }
//   `)
//   books.data.allContentfulBook.nodes.forEach((node) => {
//     actions.createPage({
//       path: `/book/${node.id}/${node.slug}`,
//       component: path.resolve("./src/templates/book.jsx"),
//       context: { id: node.id },
//     })
//   })
// }
