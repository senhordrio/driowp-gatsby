import React from "react"
import style from "./footer.module.css"

export default props => (
  <div>
    <p className={style.footer}>{props.footerText}</p>
  </div>
)
