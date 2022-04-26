import styles from "./Card.module.scss"

export const CardImage = (props) => {
    const {
        component,
        height,
        image,
        alt,
    } = props

    return (
        <div className={styles.CardImageWrapper}>
            <img src={image} height={height ?? ""} alt={alt ?? ""} />
        </div>
    )
}
import React from "react"

export const CardFooter = (props) => {
    const {
        children
    } = props

    return (
        <div className={styles.CardFooterWrapper}>
            {children}
        </div>
    )
}

const Card = (props) => {
    const {
        children
    } = props

    return (
        <div className={styles.Card}>
            {children}
        </div>
    )
}

export default Card