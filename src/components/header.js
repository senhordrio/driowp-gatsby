import React from "react"
import style from "./header.module.css"
import Home from "../assets/home-run.svg"

export default props => (
  <div className={style.flexContainer}>
    <div>
      <h1 className={style.name}>{props.nameText}</h1>
      <p className={style.ocupation}>{props.profileText}</p>
    </div>
    <div className={style.homeIcon}>
      <img src={Home} alt="home"/>
    </div>
  </div>
)
