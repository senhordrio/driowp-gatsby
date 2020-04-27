import React from "react"
import ContactLinkStyle from "./contact-link.module.css"

export default props => (
    <p className={ContactLinkStyle.textLink}>{props.text}</p>
)