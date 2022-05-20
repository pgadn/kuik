import React from "react";
import styles from "./Option.module.scss";
import classNames from "classnames";

const Option = (props) => {
  const { name, value, color, size, label, disabled, ...others } = props;

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
        disabled={disabled}
      />
      <label
        for={`${value}_id`}
        className={classNames(
          size && styles[`Label_Option_Size__${size}`],
          disabled && styles.Label_Disabled
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default Option;
