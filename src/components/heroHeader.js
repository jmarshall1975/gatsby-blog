import React from "react"
import { StaticQuery, graphql } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content">
          <p>I have been working with web technologies for over twenty years, and have have worked across a variety of disciplines for clients across many different market sectors. I am currently priveleged to work with a close-knit team managing delivery of responsive web solutions for one of the largest camping holiday operators in Europe.</p>
          <p>The posts you will find here are my musings and observations that emerge from my ongoing journey through the world of development.</p>
        </div>
      </div>
    )}
  />
)