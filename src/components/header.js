import React from "react"
import style from "./header.module.css"

export default props => (
  <div>
    <div>
      <h1 className={style.name}>{props.nameText}</h1>
      <p className={style.ocupation}>{props.profileText}</p>
    </div>
    <div>
    
    </div>
  </div>
)
