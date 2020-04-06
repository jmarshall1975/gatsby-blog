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
      </Helmet>
        <h1>Bio</h1>
        <div className="primary-content">
            <p>I'm a scrum master and developer who has been working with web technologies for over twenty years. I have have worked across a variety of disciplines for clients across many different market sectors, and am currently priveleged to manage a close-knit team delivering responsive web solutions for one of the largest camping holiday operators in Europe.</p>
            <p>The posts you will find here are my musings and observations that emerge from my ongoing journey through the world of development.</p>
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