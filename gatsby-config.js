/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Simply Recipes',
    description: "Nice and clean recipe site",
    author: "@wolffe88",
    person: { name: "lay", age: 18 },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      { name: "lay", age: 18 },
      { name: "susan", age: 34 }
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
