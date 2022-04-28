import React from "react"
import styles from "./Button.module.scss"
import classNames from "classnames"

const Button = (props) => {
    const {
        ButtonStyles,
        type,
        name,
        text,
        size,
        variant,
        disabled,
        onClick,
    } = props

    return (
        <div className={styles.ButtonWrapper}>
            <button
                className={classNames(
                    styles.Button,
                    variant && styles[`Button_Variant__${variant}`],
                    size && styles[`Button_Size__${size}`],
                    disabled && styles.Button_Disabled,
                    ButtonStyles ?? ""
                )}
                type={type ?? "button"}
                name={name}
                disabled={disabled}
                onClick={onClick}
                {...props}
            >
                {text}
            </button>
        </div>
    )
}

export default Button