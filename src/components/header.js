import React from 'react'
import {Link, graphql, useStaticQuery } from 'gatsby'; 
import headerStyles from '../components/header.module.scss'

const Header = () => {
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
        <div className={headerStyles.padding}>
            <h1 >
                <Link className={headerStyles.title}  to ="/">
                    {data.site.siteMetadata.title}
                   
                </Link>
            </h1>
            <p style={{opacity:0.5}}>A blog site built using/powered by Gatsby.</p>
           
            <ul className={headerStyles.navList}>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home </Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact </Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog </Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About Me</Link></li>
            </ul>
            <hr style={{opacity:0.4}}></hr>
        </div>
    )
}

export default Header