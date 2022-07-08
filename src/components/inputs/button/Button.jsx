import React from "react"
import styles from "./Button.module.scss"
import classNames from "classnames"

const Button = (props) => {
    const {
        ref,
        disabled,
        name,
        size,
        style,
        type,
        text,
        variant,
        onClick,
        ...others
    } = props

    return (
        <div className={styles.ButtonWrapper}>
            <button
                ref={ref}
                className={classNames(
                    styles.Button,
                    variant && styles[`Button_Variant__${variant}`],
                    size && styles[`Button_Size__${size}`],
                    disabled && styles.Button_Disabled,
                    style ?? ""
                )}
                type={type ?? "button"}
                name={name}
                disabled={disabled}
                onClick={onClick}
                {...others}
            >
                {text}
            </button>
        </div>
    )
}

export default Button