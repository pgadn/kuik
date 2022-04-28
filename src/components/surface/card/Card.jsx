import React from "react"
import styles from "./Card.module.scss"

const Card = (props) => {
    const {
        children
    } = props

    return (
        <div className={styles.CardWrapper}>
            {children}
        </div>
    )
}

export default Card