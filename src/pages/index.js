import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/footer"
import Navigation from "../components/navigation"



export default () => (
  <Layout>
    <Header profileText="Estudante, Desenvolvedor." nameText="drio"/>
    <Navigation/>
    <Footer footerText="Design e desenvolvimento por @senhordrio." />
  </Layout>
)
