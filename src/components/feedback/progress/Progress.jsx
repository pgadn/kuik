import React from "react"
import styles from "./Progress.module.scss"
import CircleSVG from "../../../styles/icons/Progress/Circle"
import classNames from "classnames"

const Progress = () => {
    return (
        <div className={styles.ProgressWrapper}>
           <CircleSVG className={styles.rotate}/>
        </div>
    )
}

export default Progress;