import React, {useState, useEffect, useRef} from "react";
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
  
  const [cal, setCal] = useState(new Calendar());  
  let calendar = new Calendar(cal.year,cal.month.number);

  const showCalendar = () => {
    setAddVisibility((prevState) => (!prevState));
  }

  const CalendarRenderWeekDaysElement = () => {
    return cal.weekDays
      .map((weekDay,index) => <span className={styles.CalendarWeek} key={index}>{weekDay.substring(0, 3)}</span>);
  }

  const getMonthDays = () => {
    const firstDayOfTheMonth = cal.month.getDay(1);
    const prevMonth = cal.getPreviousMonth();
    const totalLastMonthFinalDays = firstDayOfTheMonth.dayNumber - 1;
    const totalDays = cal.month.numberOfDays + totalLastMonthFinalDays;
    const monthList = Array.from({length: totalDays});

    for(let i = totalLastMonthFinalDays; i < totalDays; i++) {
      monthList[i] = cal.month.getDay(i + 1 - totalLastMonthFinalDays)
    }

    for(let i = 0; i < totalLastMonthFinalDays; i++) {
      const inverted = totalLastMonthFinalDays - (i + 1);
      monthList[i] = prevMonth.getDay(prevMonth.numberOfDays - inverted);
    }
    
    return monthList;    
  }

  const CalendarRenderDays = (days = []) => {
    days = getMonthDays();    
      return days.map((day,index) => <button key={index} className={styles.CalendarDaysButton}>{day.date}</button>);    
  }

  const goToPrevMonth = () => {          
    calendar.goToPreviousMonth();
    setCal(calendar);     
  }

  const goToNextMonth = () => {
    calendar.goToNextMonth();
    setCal(calendar);
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
              {/* <h4>{cal.year}</h4> */}
              <h4>{cal && cal.year ? cal.year : null}</h4>
          </div>
          <div className={styles.CalendarHeaderMonth}>
          <button type="button" className="prev-month" aria-label="previous month" onClick={() => goToPrevMonth()}><i className={`${styles.Arrow} ${styles.ArrowLeft}`}></i></button>
            <h4 tabIndex="0" aria-label="current month">
              {/* {cal.month.name} */}
              {cal && cal.month && cal.month.name ? cal.month.name : null}
            </h4>
            <button type="button" className="prev-month" aria-label="next month" onClick={() => goToNextMonth()}><i className={`${styles.Arrow} ${styles.ArrowRight}`}></i></button>
          </div>
          <div className={styles.CalendarDaysContainer}>
            <div className={styles.CalendarWeekDays}>{CalendarRenderWeekDaysElement()}</div>
            <div className={styles.CurrentMonthDaysContainer}>
              {CalendarRenderDays()}         
            </div>        
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
