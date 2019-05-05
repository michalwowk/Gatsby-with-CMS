import React from "react"
import Layout from '../components/layout'
import Head from '../components/head'

import '../styles/index.scss'



const IndexPage = () => {
    return (
        <React.Fragment>
            <Head title="home"/>
            <Layout>
                <h1>Unique Layot</h1>
            </Layout>
        </React.Fragment>
    )
}

export default IndexPage
