import styles from "./StepLabel.module.scss"

const StepLabel = (props) => {
    const {
        children
    } = props

    return (
        <div className={styles.StepLabelWrapper}>
            {children}
        </div>
    )
}

export default StepLabel