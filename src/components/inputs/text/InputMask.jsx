import React from "react"
import styles from "./InputText.module.scss"
import classNames from "classnames"
import MaskedInput from "react-text-mask"
import { Controller } from "react-hook-form"

const InputMask = (props) => {
    const {
        control,
        errorMsg,
        helperMsg,
        mask,
        name,
        placeholder,
        placeholderChar,
        style,
    } = props

    // console.log(ref)

    return (
        <div className={styles.InputTextWrapper}>
             <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <MaskedInput
                        {...field}
                        className={classNames(
                            styles.InputText,
                            errorMsg && styles.InputError,
                            style ?? ""
                        )}
                        mask={mask}
                        placeholder={placeholder}
                        placeholderChar={placeholderChar}
                    />
                )}
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

export default InputMask