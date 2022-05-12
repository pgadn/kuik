import React from "react"
import styles from "./Typography.module.scss"
import classNames from "classnames"

const Typography = (props) => {
    const {
        variant,
        text,
        color,
        align,
    } = props

    return (
        <div className={styles.TypographyWrapper}>
            <p
                className={classNames(
                    variant ? styles[`Typography_Variant__${variant}`] : "Typography_Variant__p",
                    color && styles[`Typography_FontColor__${color}`],
                    align && styles[`Typography_Align__${align}`]
                )}
            >
                {text ?? ""}
            </p>
        </div>
    )
}

export default Typography;