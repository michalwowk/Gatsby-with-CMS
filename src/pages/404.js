import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Head from '../components/head'


const NotFound = () => {
    return (
        <React.Fragment>
            <Head title="Page not found " /> 
            <Layout>
                <h1> Page is not Found </h1>
                <Link to="/">Go home bro </Link>
            </Layout>
        </React.Fragment>
    ) 
}

export default NotFound