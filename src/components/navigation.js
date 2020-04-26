import React from "react"
import PageLink from "../components/page-link"

export default () => (
  <div style={{"margin-top": "8%"}}>
    <PageLink to="/about/">sobre</PageLink>
    <PageLink to="/projects/">projetos</PageLink>
    <PageLink to="/contact/">contato</PageLink>
  </div>
)
