import React from "react";
import styles from "./Option.module.scss";
import classNames from "classnames";

const Option = (props) => {
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
    <div className={styles.OptionWrapper}>
      <input
        type="radio"
        id={`${value}_id`}
        name={name}
        value={value}
        className={classNames(
          styles.Option,
          size && styles[`Option_Size__${size}`],
          disabled && styles.Option_Disabled
        )}        
        {...others}
        disabled={disabled}
      />
      <label
        htmlFor={`${value}_id`}
        className={classNames(
          size && styles[`Label_Option_Size__${size}`],
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

export default Option;
