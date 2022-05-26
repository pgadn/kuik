import React from "react";
import styles from "./Checkbox.module.scss";
import classNames from "classnames";

const Checkbox = (props) => {
  const {
    name,
    value,
    color,
    size,
    label,    
    errorMsg,
    helperMsg,
    disabled,
    ...others
  } = props;

  return (
    <div className={styles.CheckboxWrapper}>
      <input
        id={`${name}_id`}
        type="checkbox"
        name={name}
        value={value}
        className={classNames(
          styles.Checkbox,
          size && styles[`Checkbox_Size__${size}`],
          disabled && styles.Checkbox_Disabled
        )}        
        {...others}
        disabled={disabled}
      />
      <label
        htmlFor={`${name}_id`}
        className={classNames(
          size && styles[`Label_Checkbox_Size__${size}`],
          disabled && styles.Label_Disabled
        )}
      >        
        {label}
      </label>
      {errorMsg && <span className={styles.ErrorMessage}>{errorMsg}</span>}
      {!errorMsg && helperMsg && (
        <span className={styles.HelperMessage}>{helperMsg}</span>
      )}
    </div>
  );
};

export default Checkbox;
