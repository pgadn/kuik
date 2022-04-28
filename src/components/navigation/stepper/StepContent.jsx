import React from "react"
import styles from "./StepContent.module.scss"

const StepContent = (props) => {
    const {
        children
    } = props

    return (
        <div className={styles.StepContentWrapper}>
            {children}
        </div>
    )
}

export default StepContent