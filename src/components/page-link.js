import React from "react"
import { Link } from "gatsby"
import LinkStyle from "./page-link.module.css"

export default props => (
  <p className={LinkStyle.textLink}>
    <Link style={{"text-decoration": "none","color": "white"}}to={props.to}>{props.children}</Link>
  </p>
)
