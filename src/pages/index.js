import React from "react"
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import LinkStyle from "./index.module.css"


const PageLinks = props => (
  <div className={LinkStyle.container}>
    <Link to="/about" className={LinkStyle.about}>
      sobre
    </Link>
    <Link to="/projects" className={LinkStyle.projects}>
      projetos
    </Link>
    <Link to="/contact" className={LinkStyle.contact}>
      contato
    </Link>
  </div>
)

export default () => (
  <Layout>
    <Header profileText="Estudante, Desenvolvedor." nameText="drio" />
    <PageLinks />
    <Footer footerText="Design e desenvolvimento por @senhordrio." />
  </Layout>
)
