import React from 'react';
import Layout from '../components/layout'
import {Link} from 'gatsby'

const Index = () => {
    return(
        <Layout>
       
        <h1>Hello</h1>
        <h2>I'm Shohan, building my first Gatsby site.</h2>
       
        <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        
        
        </Layout>
    )

}

export default Index
