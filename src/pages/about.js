import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"
import AboutContent from "../components/about-content"
import SocialLink from "../components/contact-link"

export default () => (
    <Layout>
      <Header profileText="Estudante, Desenvolvedor." nameText="drio"/>
      <AboutContent/>
      <SocialLink text="linkedin"/>
      <SocialLink text="twitter"/>
      <SocialLink text="spotify"/>
      <Footer footerText="Design e desenvolvimento por @senhordrio."/>
    </Layout>
)
