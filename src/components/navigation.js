import React from "react"
import PageLink from "../components/page-link"
import NavStyle from "../components/navigation.module.css"

export default () => (
  <div className={NavStyle.margin}>
    <PageLink to="/about/">sobre</PageLink>
    <PageLink to="/projects/">projetos</PageLink>
    <PageLink to="/contact/">contato</PageLink>
  </div>
)
