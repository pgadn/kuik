import styles from "./Card.module.scss"

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