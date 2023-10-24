/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Jesper Olsson - Portfolio`,
    siteUrl: `https://jesperolsson.gatsbyjs.io`,
    description: "Jesper Olsson's portfolio",
    defaultImage: "/home-page.png"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
        "spaceId": process.env.CONTENTFUL_SPACE_ID
      },
    },
    "gatsby-plugin-netlify",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
}
