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

  const [addVisibilityYear, setAddVisibilityYear] = useState(false);
  
  const [cal, setCal] = useState(new Calendar());  
  let calendar = new Calendar(cal.year,cal.month.number);  

  const currentYear = new Calendar();

  const [calendarYearDataArray, setCalendarYearDataArray] = useState([`${currentYear.year}`,`${currentYear.year-1}`,`${currentYear.year-2}`,`${currentYear.year-3}`,`${currentYear.year-4}`]);

  const calendarYearRef = useRef();
  useOutsideAlerter(calendarYearRef);

  const calendarRef = useRef();
  // useOutsideAlerter(calendarRef);

  const showCalendar = () => {
    setAddVisibility((prevState) => (!prevState));
  }

  const showYearHandler = () => {
    setAddVisibilityYear((prevState) => (!prevState));
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

  const onScrollYear = () => {
    if (calendarYearRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = calendarYearRef.current;      
      console.log()
      if (scrollTop + clientHeight === scrollHeight) {
        
        setCalendarYearDataArray(oldArray => [...oldArray,Number(oldArray[oldArray.length-1])+1] );        
      }      
      else if(scrollTop === 0) {        
        setCalendarYearDataArray(oldArray => [Number(oldArray[0])-1,...oldArray] );
      }
    }
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {     
      const handleClickOutsideRef = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          if(ref == calendarYearRef) {
            setAddVisibilityYear(false);
          }else if(ref == calendarRef) {
            setAddVisibility(false);
          }       
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutsideRef);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutsideRef);
      };
    }, [ref]);
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
      <div className={addVisibility ? `${styles.CalendarVisible} ${styles.CalendarDropDown}` : `${styles.CalendarHidden}`} ref={calendarRef}>
        <div className={styles.CalendarContainer}>
          <div className={styles.CalendarHeaderYear}>            
              {/* <h4>{cal.year}</h4> */}
              {/* <h4>{cal && cal.year ? cal.year : null}</h4> */}
              <button onClick={() => showYearHandler()}>{cal && cal.year ? cal.year : null}<span className={`${styles.ArrowDownCaret} ${styles.ArrowCaret}`}></span></button>              
              <div className={addVisibilityYear ? `${styles.CalendarYearDropdown}` : `${styles.CalendarHiddenYear}`} onScroll={() => onScrollYear()} ref={calendarYearRef}>
                {calendarYearDataArray.map((year,index) => {
                  return (
                    <p key={index}>{year}</p>
                  )
                })}
              </div>
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
