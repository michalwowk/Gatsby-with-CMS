 module.exports = {
    siteMetadata: {
        title: 'Gatsby Bootcamp',
        author: 'Michal Wowk'
    },
    plugins: [
      'gatsby-plugin-react-helmet',
        {
          resolve: 'gatsby-source-contentful',
          options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
          }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        },
        `gatsby-plugin-sharp`,
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
              {
                resolve: `gatsby-remark-images`,
                options: {
                  // It's important to specify the maxWidth (in pixels) of
                  // the content container as this plugin uses this as the
                  // base for generating different widths of each image.
                  maxWidth: 750,
                  linkImagesToOriginal: false,
                },
              },
            ],
          },
        },

    ]
}