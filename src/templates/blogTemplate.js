import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CustomReactShare from "../components/CustomShareBlock";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {

  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const url = data.site.siteMetadata.siteUrl + frontmatter.path

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />

        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.metaDescription}/>
        <meta property="og:image" content={`${data.site.siteMetadata.siteUrl}${frontmatter.thumbnail}`}/>
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_GB" />
         <link rel="canonical" href={url} />

      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div className="post-thumbnail" style={{backgroundImage: `url(${frontmatter.thumbnail})`}}>
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        <CustomReactShare title={frontmatter.title} excerpt={frontmatter.metaDescription} url={url} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
  }
`
