import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Layout from "../components/layout"
import SocialLinks from "../components/social-links"
import AboutStyle from "./about.module.css"
import Picture from "../assets/drio.jpg"

const AboutContent = props => (
    <div className={AboutStyle.flexContainer}>
      <div className={AboutStyle.pictureWrapper}>
        <img className={AboutStyle.picture} src={Picture} alt="drio" />
      </div>
      <div className={AboutStyle.textWrapper}>
        <p className={AboutStyle.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ipsum
          sapien, tincidunt a elementum quis, tristique ac lorem. Integer
          ullamcorper diam eu tortor viverra, eget fringilla magna auctor. Sed vel
          ligula imperdiet, consectetur diam eu, porta lacus. Vestibulum quis
          luctus nisl, posuere ullamcorper nisi. Suspendisse tempor, ante at
          lobortis lacinia, lacus metus vulputate libero, non dignissim tellus
          ipsum tempor orci.
        </p>
      </div>
    </div>
)

export default () => (
    <Layout>
      <Header profileText="Estudante, Desenvolvedor." nameText="drio"/>
      <AboutContent/>
      <SocialLinks/>
      <Footer footerText="Design e desenvolvimento por @senhordrio."/>
    </Layout>
)
