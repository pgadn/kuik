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
          size && styles[`Checkbox_Size__${size}`]          
        )}  
        disabled={disabled}      
      />
      <label for={`${name}_id`} className={classNames(          
          size && styles[`Label_Size__${size}`]          
        )}> {label}</label>
    </div>
  );
};

export default Checkbox;


