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
          <p>It all started with a brief extracurricular class at uni a little over twenty years ago. The subject of the course was the (as then) obscure mark-up language called HTML. At the time the specification for HTML 4.0 was shiny and new, but our creations had more in common with <a href="https://en.wikipedia.org/wiki/Ceefax" target="_blank" rel="noopener noreferrer">Ceefax</a> than the rich applications we recognise today.</p>
          <p>Unsatisfied with the rudimentary websites we were building I quickly discovered an appreciation for the power afforded by back-end code, and found myself increasingly focused on development using a variety of server side technologies including Perl, Classic ASP, PHP, ColdFusion and ASP.Net MVC (the good, the bad and the ugly, although I’ll leave it to you to decide which is which).</p>
          <p>Even now, some two decades after my first foray into the world of web development, I still get a buzz from the creative process that is coding. There’s nothing quite like starting with a blank canvas and seeing a project through to realisation.</p>
          <p>Naturally, over the years my focus has changed, and today I wear many hats; technical manager, <a href="https://www.scrumalliance.org/community/profile/jmarshall25" target="_blank" rel="noopener noreferrer">Scrum Master</a>, team coach, but regardless of my focus on any given day, the passion for development that was ignited all that time ago continues to endure.</p>
          <p>Throughout my career I’ve worked for clients across many different market sectors, and am currently privileged to manage a close-knit cross-functional team delivering responsive web solutions for one of the largest camping holiday operators in Europe.</p>
          <p>Although opportunities to get my hands dirty at the coalface are rarer these days, I now enjoy the challenge of coaching and supporting my team through their own journeys, and like to think that I approach the application of agile processes with the same fervour that I once reserved for technical projects.</p>
          <p>Nevertheless, while my day job may no longer demand the same degree of technical engagement, I strongly believe in the continued need to &quot;sharpen your axe&quot;,  and I continue to explore promising web technologies whenever possible. Current interests include functional programming, NodeJS and associated web stacks.</p>
          <p>I'm always happy to hear from like-minded individuals, so if you'd like to compare notes or otherwise get in touch, please feel free to reach out via <a href="https://www.linkedin.com/in/james-marshall-5874734/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="https://twitter.com/AgileNorthwest" target="_blank" rel="noopener noreferrer">Twitter</a>.</p>
        </div>
      </div>
    )}
  />
)