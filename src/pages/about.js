import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
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
        <meta property="og:url" content="https://blog.jamesmarshall.org/about" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_GB" />
        <link rel="canonical" href="https://blog.jamesmarshall.org/about" />
      </Helmet>
        <h1>Bio</h1>
        <div className="primary-content">
            <p>I'm a scrum master and developer who has been working with web technologies for over twenty years. I have have worked across a variety of disciplines for clients across many different market sectors, and am currently priveleged to manage a close-knit team delivering responsive web solutions for one of the largest camping holiday operators in Europe.</p>
            <p>The posts you will find here are my musings and observations that emerge from my ongoing journey through the world of development.</p>
            <p>I'm always happy to hear from like-minded individuals, so if you'd like to compare notes or otherwise get in tough, please feel free to reach out via <a href="https://www.linkedin.com/in/james-marshall-5874734/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="https://twitter.com/AgileNorthwest" target="_blank" rel="noopener noreferrer">Twitter</a>.</p>
        </div>
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`