import React from "react"
import styles from "./CardHeader.module.scss"

const CardHeader = (props) => {
    const {
        children
    } = props

    return (
        <div className={styles.CardHeaderWrapper}>
            {children}
        </div>
    )
}

export default CardHeader