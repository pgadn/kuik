import React from "react"
import styles from "./CardImage.module.scss"

const CardImage = (props) => {
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

export default CardImage