import React from 'react';
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import LayoutStyles from '../components/layout.module.scss'

const BlogLayout = (props) =>{
    return(
        <div className={LayoutStyles.container}>
            <div className={LayoutStyles.content}>
                <Header  />
            
                {props.children}    
            </div>
          
            
            <Footer />
        </div>
    )
}

export default BlogLayout