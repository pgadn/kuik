import React from "react"
import styles from "./InputText.module.scss"
import classNames from "classnames"

const InputText = (props) => {
    const {
        type,
        name,
        placeholder,
        inputRef,
        errorMsg,
        helperMsg,
        InputTextStyles,
        ...other
    } = props

    // console.log(inputRef)

    return (
        <div className={styles.InputTextWrapper}>
            <input
                className={classNames(
                    styles.InputText,
                    errorMsg && styles.InputError,
                    InputTextStyles ?? ""
                )}
                type={type ?? "text"}
                name={name}
                placeholder={placeholder ?? ""}
                {...inputRef}
                {...other}
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