import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Hero from "../components/heroHeader"

const BioPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Bio - {site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        {!site.siteMetadata.w3l_dom_key ? null : <meta name="w3l-domain-verification" content={site.siteMetadata.w3l_dom_key} />}
        <meta property="og:title" content={site.siteMetadata.title} />
        <meta property="og:description" content={site.siteMetadata.description} />
        <meta property="og:url" content="https://www.jamesmarshall.org" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_GB" />
        <link rel="canonical" href="https://www.jamesmarshall.org" />
      </Helmet>
      <Hero />
    </Layout>
  )
}
export default BioPage
export const pageQuery = graphql`
  query BioPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`