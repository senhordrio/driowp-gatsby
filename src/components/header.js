import React from "react"
import style from "./header.module.css"
import Home from "../assets/home-run.svg"
import {Link} from "gatsby"

export default props => (
  <div className={style.flexContainer}>
    <div>
      <h1 className={style.name}>{props.nameText}</h1>
      <p className={style.ocupation}>{props.profileText}</p>
    </div>
    <div className={style.homeIcon}>
      <Link to="/"><img src={Home} alt="home"/></Link>
    </div>
  </div>
)
