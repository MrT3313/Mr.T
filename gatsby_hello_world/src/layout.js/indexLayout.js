// IMPORTS
import React from "react"

// COMPONENTS
import Footer from '../components/footer.js'
import Header from '../components/header.js'

const Layout = (props) => {
return (
    <>
        <Header />
            {props.children}
        <Footer />
    </>
)
}

export default Layout