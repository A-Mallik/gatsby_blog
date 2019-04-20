import React from 'react'
import {Link, graphql, useStaticQuery } from 'gatsby'; 
import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title,
            author
          } 
        }
      }
    `)
    return(
        <div className={footerStyles.footer}>
            <p>Created By  {data.site.siteMetadata.author} © 2019</p>
        </div>
    )
}

export default Footer