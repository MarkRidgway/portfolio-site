module.exports = {
  siteMetadata: {
    title: 'Mark Ridgway',
    tagline: 'Web Developer',
    description: 'Mark Ridgway - Web Developer',
    keywords: 'Mark Ridgway, Web Developer, Javascript, React, Angular'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
  ],
}
