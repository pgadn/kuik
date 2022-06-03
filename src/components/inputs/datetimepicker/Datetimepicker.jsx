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
    onChange,
    format,
    ...others
  } = props;
  
  const [addVisibility, setAddVisibility] = useState(false);

  const [addVisibilityYear, setAddVisibilityYear] = useState(false);

  const [cal, setCal] = useState(new Calendar());  
  let calendar = new Calendar(cal.year,cal.month.number);  
  const [inputTypeValue, setInputTypeValue] = useState(new Date(`${cal.month.number}-${cal.today.date}-${cal.year}`).toLocaleDateString());

  const currentYear = new Calendar();

  const currentDay = useRef(cal.today);

  let selectedDayElement = useRef(null);
  
  const [calendarYearDataArray, setCalendarYearDataArray] = useState([currentYear.year-4,currentYear.year-3,currentYear.year-2,currentYear.year-1,currentYear.year]);

  let calendarYearRef = useRef();
  useOutsideClick(calendarYearRef);

  let calendarRef = useRef();
  // useOutsideClick(calendarRef);

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
    let monthList = Array.from({length: totalDays});

    for(let i = totalLastMonthFinalDays; i < totalDays; i++) {
      monthList[i] = cal.month.getDay(i + 1 - totalLastMonthFinalDays)
    }

    for(let i = 0; i < totalLastMonthFinalDays; i++) {
      let inverted = totalLastMonthFinalDays - (i + 1);
      monthList[i] = prevMonth.getDay(prevMonth.numberOfDays - inverted);
    }
    
    return monthList;    
  }

  const CalendarRenderDays = (days = []) => {
    days = getMonthDays();    
      return days.map((day,index) => <button type="button" key={index} className={styles.CalendarDaysButton} onClick={(e) => selectDay(e,day)}>{day.date}</button>);    
  }

  const goToPrevMonth = () => {          
    calendar.goToPreviousMonth(); 
    if(selectedDayElement.current) {      
      selectedDayElement.current.classList.remove(`${styles.CalendarDaysButtonSelected}`);
      selectedDayElement = null;
    }
    setCal(calendar);    
  }

  const goToNextMonth = () => {
    calendar.goToNextMonth();    
    if(selectedDayElement.current) {      
      selectedDayElement.current.classList.remove(`${styles.CalendarDaysButtonSelected}`);
      selectedDayElement = null;
    }
    setCal(calendar);
  }

  const onScrollYear = () => {
    if (calendarYearRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = calendarYearRef.current;            
      if (scrollTop + clientHeight === scrollHeight) {
        
        setCalendarYearDataArray(oldArray => [...oldArray,Number(oldArray[oldArray.length-1])+1] );        
      }      
      else if(scrollTop === 0) {        
        setCalendarYearDataArray(oldArray => [Number(oldArray[0])-1,...oldArray] );
      }
    }
  }


  function useOutsideClick(ref) {
    useEffect(() => {     
      const handleClickOutsideRef = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          if(ref == calendarYearRef) {
            setAddVisibilityYear(false);
          }else if(ref == calendarRef) {
            // setAddVisibility(false);
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

  const selectDay = (event,day) => {    
    let el = event.target;
    el.classList.add(`${styles.CalendarDaysButtonSelected}`);
    if(selectedDayElement.current) {      
      selectedDayElement.current.classList.remove(`${styles.CalendarDaysButtonSelected}`);
    }
    selectedDayElement.current = el;    
    setInputTypeValueHandler(new Date(`${cal.month.number}-${day.date}-${cal.year}`).toLocaleDateString())
    currentDay.current = day;

  }

  useEffect(() => {
    if (typeof document !== undefined) {
      if (inputTypeValue) {
          let inpt = document.getElementsByName(name)[0]
          // console.log();
          // console.log(currentDay.current.date);       
          // inpt.value = )
          let test = new Date(new Date(`${cal.month.number}-${currentDay.current.date}-${cal.year} ${new Date().toTimeString().split(" ")[0]}`))
          let event = new Event('change', { bubbles: true })
          inpt.dispatchEvent(event)
          onChange && onChange(test)
      }
    }
  },[inputTypeValue])

  const setInputTypeValueHandler = (date) => {
    setInputTypeValue(date);
  }
  
  const selectYear = (year) => {
    if(selectedDayElement.current) {      
      selectedDayElement.current.classList.remove(`${styles.CalendarDaysButtonSelected}`);
      selectedDayElement = null;
    }
    setCal(new Calendar(year,cal.month.number))
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
        value={inputTypeValue}
        readOnly
        
        // onChange={(e) => {
        //   console.log(e)
        //   onChange && onChange("test")
        // }}
        {...others}        
        disabled={disabled}        
      />
      <div className={addVisibility ? `${styles.CalendarVisible} ${styles.CalendarDropDown}` : `${styles.CalendarHidden}`} ref={calendarRef}>
        <div className={styles.CalendarContainer}>
          <div className={styles.CalendarHeaderYear}>            
              {/* <h4>{cal.year}</h4> */}
              {/* <h4>{cal && cal.year ? cal.year : null}</h4> */}
              <button type="button" onClick={() => showYearHandler()}>{cal && cal.year ? cal.year : null}<span className={`${styles.ArrowDownCaret} ${styles.ArrowCaret}`}></span></button>              
              <div className={addVisibilityYear ? `${styles.CalendarYearDropdown}` : `${styles.CalendarHiddenYear}`} onScroll={() => onScrollYear()} ref={calendarYearRef}>
                {calendarYearDataArray.map((year,index) => {
                  return (
                    <p key={index} className={`${styles.YearListP}`} onClick={() => selectYear(year)}>{year}</p>
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
