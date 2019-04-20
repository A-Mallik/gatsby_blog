module.exports = { //because its a node js file, you need module.exports
  siteMetadata:{
    title: 'Gatsbylog',
    author: 'Shohan'
  },
    plugins: [
       {
         resolve:'gatsby-source-contentful',
         options:{
           spaceId: process.env.CONTENTFUL_SPACE_ID,
           accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
         }
       },
        'gatsby-plugin-sass',
        {
          resolve: 'gatsby-source-filesystem', //resource = name
          options: {
            name: 'src',
            path: `${__dirname}/src/`
          }
        },
        
        'gatsby-plugin-sharp',
        {
          resolve:'gatsby-transformer-remark',
          options:{
            plugins:[
              'gatsby-remark-relative-images',
              {
                resolve:'gatsby-remark-images',
                options:{
                  maxWidth: 750,
                  linkImagesToOriginal: false
                }
              }
            ]
          }
        }
      ]
}