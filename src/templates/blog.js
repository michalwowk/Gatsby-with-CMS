import React from 'react'
import Layout from '../components/layout'
import { graphql  } from 'gatsby'
import Head from '../components/head'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         data
//       }
//       html
//     }
//   }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost( slug: { eq: $slug } ) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body{
        json
      }
    }
  }
`

const Blog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) =>{
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} / >
      }
    }
  }

  return (
    <React.Fragment>
      <Head title={props.data.contentfulBlogPost.title} />
      <Layout>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        { documentToReactComponents(props.data.contentfulBlogPost.body.json, options ) }
      </Layout>
    </React.Fragment>
  )
}

  
 
export default Blog