import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

import { FaTwitter, FaFacebook, FaGooglePlus, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { ShareButtonRoundSquare, ShareBlockStandard } from "react-custom-share";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const shareBlockProps = {
    url: "https://blog.jamesmarshall.org",
    button: ShareButtonRoundSquare,
    buttons: [
      { network: "Linkedin", icon: FaLinkedin },
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
      { network: "GooglePlus", icon: FaGooglePlus },
      { network: "Email", icon: FaEnvelope }
    ],
    text: `Take a look at this guys blog.`,
    longtext: `Take a look at this guys blog. He's got some interesting posts you might be interested in.`
  };
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <ShareBlockStandard {...shareBlockProps} />
        <p>&copy; 2020 Delog &bull; Crafted with love by <a href="https://w3layouts.com">W3Layouts</a>, modified with intent by <a href="/">James Marshall</a></p>
      </footer>
    </div>
  )
}