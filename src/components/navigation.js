import React from "react"
import {Link} from "gatsby"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/">Bio</Link>
    <Link to="/blog">Blog</Link>
    <a href="https://www.linkedin.com/in/james-marshall-5874734/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://twitter.com/AgileNorthwest" target="_blank" rel="noopener noreferrer">Twitter</a>
  </nav>
  
)