import React, {useState} from "react";
import styles from "./Datetimepicker.module.scss";
import classNames from "classnames";
import CalendarSVG from "../../../styles/icons/Calendar/Calendar"
import Calendar from "./Calendar/Calendar"

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

  
  const [addVisibility, setAddVisibility] = useState(false);

  const showCalendar = () => {
    setAddVisibility((prevState) => (!prevState));
  }
  
  const cal = new Calendar(2022,6,"en-US");

  console.log(cal);

  // const cal = new Calendar();

  const getWeekDaysElementStrings = () => {
    return cal.weekDays
      .map((weekDay,index) => <span key={index}>{weekDay.substring(0, 3)}</span>);
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
      <div className={addVisibility ? `${styles.CalendarVisible} ${styles.CalendarDropDown}` : `${styles.CalendarHidden}`}>
        <div className={styles.CalendarContainer}>
          <div className={styles.CalendarHeaderYear}>            
              2022            
          </div>
          <div className={styles.CalendarHeaderMonth}>
          <button type="button" className="prev-month" aria-label="previous month"></button>
            <h4 tabIndex="0" aria-label="current month">
              January
            </h4>
            <button type="button" className="prev-month" aria-label="next month"></button>
          </div>
          <div className={styles.CalendarDaysContainer}>
            <div className={styles.CalendarWeekDays}>{getWeekDaysElementStrings()}</div>            
          </div>          
        </div>        
      </div>
      <CalendarSVG width={23} fill="#294197" className={styles.CalendarDateTimePickerIcon} onClick={() => showCalendar()}/>  
      {errorMsg && <span className={styles.ErrorMessage}>{errorMsg}</span>}
      {!errorMsg && helperMsg && (
        <span className={styles.HelperMessage}>{helperMsg}</span>
      )}
    </div>
  );
};

export default Datetimepicker;
