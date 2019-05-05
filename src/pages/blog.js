import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from '../components/layout'
import Head from '../components/head'

import styledBlog  from './blog.module.scss'


const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
            sort: {
                fields:publishedDate,
                order:DESC
            }
            ) {
            edges {
                node {
                    title
                    slug
                    publishedDate(formatString:"MMMM Do, YYYY")
                }
            }
            }
        }      
    `)

    return (
        <React.Fragment>
            <Head title="News" />
            <Layout>
                <h1>Blog</h1>
                <ol className={styledBlog.posts}>
                {data.allContentfulBlogPost.edges.map((post) => {
                    return(
                        <li className={styledBlog.post}>
                            <Link to={`/blog/${post.node.slug}`}> 
                                <h2>{post.node.title}</h2>
                                <p>{post.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
                </ol>
            </Layout>
        </React.Fragment>
    )
}

export default BlogPage