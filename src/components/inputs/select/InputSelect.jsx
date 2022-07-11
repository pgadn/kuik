import React, { useEffect, useRef, useState, useContext } from "react"
import styles from "./InputSelect.module.scss"
import classNames from "classnames"
import SelectContext from "./SelectContext"

const groupyBy = (xs, key) => {
    return xs.reduce((rv, x) => {
        (rv[x[key]] = rv[x[key]] || []).push(x)
        return rv
    }, {})
}

export const SelectItem = ({
    group,
    items,
    optionLabel,
    optionValue,
}) => {
    const [options, setOptions] = useState(undefined)
    const selectCntx = useContext(SelectContext)

    const handleClick_Selected = (o) => {
        if (o && o.value) {
            selectCntx.setValue(optionValue ? o[optionValue] : o.value)
            selectCntx.setSelectedLabel(optionLabel ? o[optionLabel] : o.label)
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
                                key={optionValue ? oo[optionValue] : oo.value}
                                value={optionValue ? oo[optionValue] : oo.value}
                                onMouseDown={() => handleClick_Selected(oo)}
                            >
                                {optionLabel ? oo[optionLabel] : oo.label}
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
                    onMouseDown={() => handleClick_Selected(o)}
                >
                    {optionLabel ? o[optionLabel] : o.label}
                </option>
            ))}
        </>
    )
}

const InputSelect = (props) => {
    const {
        errorMsg,
        helperMsg,
        name,
        placeholder,
        options,
        group = '',
        onChange,
        optionLabel,
        optionValue,
        internalValue,
    } = props
    const selectRef = useRef()
    const [active, setActive] = useState(false)
    const [selectedLabel, setSelectedLabel] = useState('')
    const [value, setValue] = useState(internalValue ? internalValue : value)

    const handleClick_Dropdown = () => {
        setActive(!active)
    }

    useEffect(() => {
        const _value = internalValue ? internalValue : value
        if (typeof document !== undefined) {
            if (value) {
                let inpt = document.getElementsByName(name)[0]
                let inptLabel = document.getElementsByName("nameLabel")[0]
                inpt.value = value
                inptLabel.value = selectedLabel
                let event = new Event('change', { bubbles: true })
                inpt.dispatchEvent(event)
                onChange && onChange(event)
            }
        }
    }, [value])

    return (
        <SelectContext.Provider value={{
            value,
            setValue,
            setSelectedLabel,
        }}>
            <div className={styles.InputSelectWrapper}>
                <div
                    ref={selectRef}
                    className={classNames(
                        styles.Dropdown,
                        active && styles.Active,
                        selectedLabel && styles.Selected,
                        errorMsg && styles.InputError,
                    )}
                    onClick={() => {
                        handleClick_Dropdown()
                    }}
                    onBlur={(e) => {
                        e.persist()
                        setActive(false)
                    }}
                >
                    <input
                        readOnly
                        className={styles.Select}
                        type="hidden"
                        name={name}
                        placeholder={placeholder}
                    />
                    <input
                        readOnly
                        className={styles.Select}
                        type="text"
                        name="nameLabel"
                        placeholder={placeholder}
                    />
                    <ul className={classNames(styles.DropdownMenu, group && styles.DropdownMenu__Group)}>
                        <SelectItem
                            group={group}
                            items={options}
                            optionLabel={optionLabel}
                            optionValue={optionValue}
                        />
                    </ul>
                </div>
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