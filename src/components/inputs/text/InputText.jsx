import React, { useEffect } from "react"
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
        value,
    } = props

    useEffect(() => {
        if (typeof document !== undefined) {
            if (value) {
                let inpt = document.getElementsByName(name)[0]
                inpt.value = value
                let event = new Event('change', { bubbles: true })
                inpt.dispatchEvent(event)
                onChange && onChange(event)
            }
        }
    }, [value])

    return (
        <div className={styles.InputTextWrapper}>
            <input
                className={classNames(
                    styles.InputText,
                    errorMsg && styles.InputError,
                    style ?? ""
                )}
                value={value}
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