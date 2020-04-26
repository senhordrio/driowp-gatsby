import React from "react"
import LayoutStyle from "./layout.module.css"

export default ({children}) => (
    <div className={LayoutStyle.layout}>
        {children}
    </div>
)