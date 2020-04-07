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
        <div className="headline">Bio</div>
        <div className="primary-content">
            <p>I'm a scrum master and developer who has been working with web technologies for over twenty years. I have have worked across a variety of disciplines for clients across many different market sectors, and am currently priveleged to manage a close-knit team delivering responsive web solutions for one of the largest camping holiday operators in Europe.</p>
            <p>The posts you will find here are my musings and observations that emerge from my ongoing journey through the world of development.</p>
            <p>I'm always happy to hear from like-minded individuals, so if you'd like to compare notes or otherwise get in tough, please feel free to reach out via <a href="https://www.linkedin.com/in/james-marshall-5874734/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="https://twitter.com/AgileNorthwest" target="_blank" rel="noopener noreferrer">Twitter</a>.</p>
        </div>
      </div>
    )}
  />
)