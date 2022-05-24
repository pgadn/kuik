import React from "react";
import styles from "./Datetimepicker.module.scss";
import classNames from "classnames";
import CalendarSVG from "../../../styles/icons/Calendar/Calendar"

const Datetimepicker = (props) => {
  const {
    style,
    name,    
    color,
    size,    
    inputRef,
    errorMsg,
    helperMsg,
    placeholder,
    disabled,
    ...others
  } = props;

  const test = () => {
    alert("test");
  }

  return (
    <div className={styles.DatetimepickerWrapper}>
      <input
        className={classNames(
          styles.InputText,                
          errorMsg && styles.InputError,
          style ?? ""
        )}
        type="text"
        name={name}        
        placeholder={placeholder ?? "mm/dd/yyyy"}
        {...inputRef}
        {...others}
        disabled={disabled}        
      />
      <CalendarSVG width={25} fill="#294197" className={styles.CalendarDateTimePickerIcon} onClick={() => test()}/>  
      {errorMsg && <span className={styles.ErrorMessage}>{errorMsg}</span>}
      {!errorMsg && helperMsg && (
        <span className={styles.HelperMessage}>{helperMsg}</span>
      )}
    </div>
  );
};

export default Datetimepicker;
