import styles from "./InputText.module.scss"
import classNames from "classnames"
import MaskedInput from "react-text-mask"
import PropTypes from "prop-types"
import { useForm, Controller } from "react-hook-form"

function Mask(props) {
    const { inputRef, mask, placeholder, placeholderChar, ...others } = props
    console.log(others)
    return (
        <MaskedInput
            // {...inputRef}
            // inputref={inputRef}
            {...others}
            {...inputRef}
            mask={mask}
            placeholder={placeholder}
            placeholderChar={placeholderChar}
        />
    )
}
// Mask.propTypes = {
//     inputRef: PropTypes.func.isRequired,
// }

const InputMask = (props) => {
    const {
        type,
        name,
        placeholder,
        placeholderChar,
        inputRef,
        errorMsg,
        helperMsg,
        InputTextStyles,
        mask,
        control,
        validation,
        ...others
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
                            InputTextStyles ?? ""
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