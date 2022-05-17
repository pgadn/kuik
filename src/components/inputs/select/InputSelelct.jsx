import React, { useEffect, useRef, useState, useContext } from "react"
import styles from "./InputSelect.module.scss"
import classNames from "classnames"
import SelectContext from "./SelectContext"
import { useFormContext, useForm } from "react-hook-form"

const groupyBy = (xs, key) => {
    return xs.reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x)
        return rv
    }, {})
}

export const SelectItem = ({ group, items, hiddenRef }) => {
    const [options, setOptions] = useState(undefined)
    const selectCntx = useContext(SelectContext)

    const handleClick_Selected = (o) => {
        console.log(o)
        console.log(hiddenRef)
        if (o && o.value) {
            selectCntx.setValue(o.value)
            selectCntx.setSelectedLabel(o.label)
        }
    }

    useEffect(() => {
        if (group) {
            setOptions(groupyBy(items, group))
        } else {
            setOptions(items)
        }
    }, [group])

    if (group) {
        return (
            <>
                {options && Object.keys(options).map((o) => (
                    <optgroup label={o}>
                        {options[o] && options[o].map((oo) => (
                            <option
                                key={oo.id}
                                value={oo.value}
                                onClick={() => handleClick_Selected(oo)}
                            >
                                {oo.label}
                            </option>
                        ))}
                    </optgroup>
                ))}
            </>
        )
    }

    return (
        <>
            {options && options.map((o) => (
                <option
                    key={o.id}
                    value={o.value}
                >
                    {o.label}
                </option>
            ))}
        </>
    )
}

const InputSelect = (props) => {
    const {
        errorMsg,
        helperMsg,
        inputRef,
        name,
        placeholder,
        options,
        style,
        group = '',
        ...others
    } = props
    const selectRef = useRef()
    const hiddenRef = useRef()
    const [active, setActive] = useState(false)
    const [selectedLabel, setSelectedLabel] = useState('')
    const [value, setValue] = useState(undefined)
    const { register, formState: { errors } } = useForm()
    const { ref, ...fields } = register('carModel', {
        required: { value: true, message: "This field is required" }
    })

    const handleClick_Dropdown = () => {
        setActive(!active)
    }

    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <SelectContext.Provider value={{
            value,
            setValue,
            setSelectedLabel,
        }}>
            <div className={styles.InputSelectWrapper}>
                {/* <select
                    ref={selectRef}
                    onChange={() => {
                        selectRef.current.style.color = "var(--qcuicq-color-textDark)"
                    }}
                    className={classNames(
                        styles.InputSelect,
                        errorMsg && styles.InputError,
                        style ?? ""
                    )}
                    name={name}
                    {...inputRef}
                    {...others}
                >
                    {placeholder && (
                        <option
                            disabled
                            selected
                        >{placeholder}</option>
                    )}
                    {options && options.map((o, idx) => (
                        <option
                            key={o && o.id ? o.id : idx}
                            value={o.value}
                        >{o.label}</option>
                    ))}
                </select> */}
                <div
                    ref={selectRef}
                    className={classNames(styles.Dropdown, active && styles.Active, selectedLabel && styles.Selected)}
                    onClick={() => {
                        // console.log(selectRef)
                        // if (!`${selectRef.current.className}`.includes('active')) {
                        //     selectRef.current.className = selectRef.current.className + ' active'
                        // } else {
                        //     selectRef.current.className = `${selectRef.current.className}`.replace(' active','')
                        // }
                        handleClick_Dropdown()
                    }}
                >
                    {placeholder && !selectedLabel ? (
                        // <div className={styles.Select}>
                        //     <span>{placeholder}</span>
                        // </div>
                        <input
                            className={styles.Select}
                            type="text"
                            name={name}
                            value={value}
                            placeholder={placeholder}
                            {...inputRef}
                        />
                    ) : (
                        // <div className={styles.Select}>
                        //     <span>{selectedLabel}</span>
                        // </div>
                        <input
                            className={styles.Select}
                            type="text"
                            name={name}
                            value={value}
                            placeholder={placeholder}
                            {...inputRef}
                        />
                    )}
                    {/* <input
                        // ref={(i) => {
                        //     ref(i)
                        //     hiddenRef.current = i
                        // }}
                        type="hidden"
                        name={name}
                        value={value}
                        {...inputRef}
                        // {...others}
                    /> */}
                    <ul className={styles.DropdownMenu}>
                        {/* {options && options.map((o, idx) => (
                            // <li
                            //     key={o && o.id ? o.id : idx}
                            //     id={o.value}
                            //     onClick={() => handleClick_Selected(o)}
                            // >{o.label}</li>
                            // <optgroup label={o.group} style={{ color: '#000' }}>
                            //     <option
                            //         key={o && o.id ? o.id : idx}
                            //         id={o.value}
                            //         onClick={() => handleClick_Selected(o)}
                            //     >{o.label}</option>
                            // </optgroup>
                        ))} */}
                        <SelectItem group={group} items={options} hiddenRef={hiddenRef} />
                    </ul>
                </div>
                {/* {errors && errors.carModel && errors.carModel.message && (
                    <span className={styles.ErrorMessage}>
                        {errors.carModel.message}
                    </span>
                )} */}
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
        </SelectContext.Provider>
    )
}

export default InputSelect