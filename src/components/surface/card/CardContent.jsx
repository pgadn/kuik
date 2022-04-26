import React from "react"
import styles from "./CardContent.module.scss"

const CardContent = (props) => {
    const {
        children
    } = props

    return (
        <div className={styles.CardContentWrapper}>
            {children}
        </div>
    )
}

export default CardContent