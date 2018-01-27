module.exports = {
  siteMetadata: {
    title: `Gatsby with Contentful`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `g4cmaex40blz`,
        accessToken: `8617c8b18d495f0f07602f34b7adf876e77d37caf6f5088db8a5e94be43c6589`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
