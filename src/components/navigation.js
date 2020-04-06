import React from "react"
import {Link} from "gatsby"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/">Blog</Link>
    <Link to="/about">Bio</Link>
    <a href="https://www.linkedin.com/in/james-marshall-5874734/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://twitter.com/AgileNorthwest" target="_blank" rel="noopener noreferrer">Twitter</a>
  </nav>
  
)