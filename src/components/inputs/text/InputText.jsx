import React from "react"
import styles from "./InputText.module.scss"
import classNames from "classnames"

const InputText = (props) => {
    const {
        errorMsg,
        helperMsg,
        inputRef,
        name,
        placeholder,
        style,
        type,
        ...others
    } = props

    return (
        <div className={styles.InputTextWrapper}>
            <input
                className={classNames(
                    styles.InputText,
                    errorMsg && styles.InputError,
                    style ?? ""
                )}
                type={type ?? "text"}
                name={name}
                placeholder={placeholder ?? ""}
                {...inputRef}
                {...others}
            />
            {errorMsg && (
                <span className={styles.ErrorMessage}>
                    {errorMsg}
                </span>
            )}
            {!errorMsg && helperMsg && (
                <span className={styles.HelperMessage}>
                    {helperMsg}
                </span>
            )}
        </div>
    )
}

export default InputText