// IMPORTS
    import React from "react"
    import { Link } from 'gatsby'

// COMPONENTS
    import Layout from '../layout.js/indexLayout'

const IndexPage = () => {
    return (
        
        <Layout>
            <h1>Hello There</h1>
            <p>My name is Reed. I am a full stack developer</p>
            <p>Need a developer? <Link to ='/contact'>Contact Me</Link></p>
        </Layout>
        
            
    )
}

export default IndexPage