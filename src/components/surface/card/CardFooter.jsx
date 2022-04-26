import React from "react"
import styles from "./CardFooter.module.scss"

const CardFooter = (props) => {
    const {
        children
    } = props

    return (
        <div className={styles.CardFooterWrapper}>
            {children}
        </div>
    )
}

export default CardFooter