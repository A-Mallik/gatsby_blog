import React from 'react';
import Layout from '../components/layout'
import {graphql} from 'gatsby'


//export because no other way to access the context which contains our slug if we used useStaticQuery

export const query = graphql` 
  query(
    $slug: String!
  ){
    markdownRemark(
      fields: {
        slug:{
          eq:  $slug
        }
      }
    ){
      frontmatter{
        title
        date
      }
      html
      excerpt
    }
  }
`

const Blog = (props) =>{
    return(
        <Layout>
           <h1>{props.data.markdownRemark.frontmatter.title}</h1>
           <p>{props.data.markdownRemark.frontmatter.date}</p>
           <div dangerouslySetInnerHTML={{__html:props.data.markdownRemark.html}}></div>
        </Layout>

    )
}

export default Blog