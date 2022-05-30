import React from "react";
import styles from "./Checkbox.module.scss";
import classNames from "classnames";

const Checkbox = (props) => {
  const { name, value, color, size, label, disabled, ...others } = props;

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
        disabled={disabled} 
      />
      <label for={`${name}_id`} className={classNames(          
          size && styles[`Label_Checkbox_Size__${size}`],
          disabled && styles.Label_Disabled     
        )}> {label}</label>
    </div>
  );
};

export default Checkbox;


