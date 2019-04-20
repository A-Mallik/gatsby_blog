//gatsby node configuration file to tap into a lot of node apis, and will
//allow us to generate pages dynamically.

const path = require('path')

module.exports.onCreateNode = ({ node,actions }) =>{ //attach data to individual nodes
    // a node is a data structure for storing your Gatsby Data.
    const {createNodeField} = actions

    if(node.internal.type === 'MarkdownRemark'){

        // console.log(JSON.stringify(node, undefined, 4))
        const slug = path.basename(node.fileAbsolutePath, '.md')
        //path.basename helps us get the filename, bar the extension.
       createNodeField({ // to actually add new node to field.
           node,  //the actual node
           name: 'slug', //name for the new value
           value: slug // source/value for the actual name
       })
    }
}

module.exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js') //resolve a partial path.
    const response =  await graphql(`   
    query{
        allMarkdownRemark{
          edges{
            node {
              fields{
                slug
              }
            }
          }
        }
      }
    `)

    response.data.allMarkdownRemark.edges.forEach((edge)=> {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}