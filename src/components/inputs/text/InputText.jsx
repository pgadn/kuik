import React from "react"
import styles from "./InputText.module.scss"
import classNames from "classnames"

const InputText = (props) => {
    const {
        errorMsg,
        helperMsg,
        name,
        placeholder,
        style,
        type,
        onChange,
    } = props

    return (
        <div className={styles.InputTextWrapper}>
            <input
                className={classNames(
                    styles.InputText,
                    errorMsg && styles.InputError,
                    style ?? ""
                )}
                onChange={(e) => {
                    onChange && onChange(e)
                }}
                type={type ?? "text"}
                name={name}
                placeholder={placeholder ?? ""}
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