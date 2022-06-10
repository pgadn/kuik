import React,{useRef, useEffect} from "react";
import styles from "./Dialog.module.scss";

const Dialog = (props) => {

  const { open, onClose } = props;

  let dialogRef = useRef();
 
  useEffect(() => {
    window.onclick = (e) => {      
      if(e.target.className == styles.DialogWrapper) {
        onClose();
      }
    }
  },[dialogRef])

  return (
    <div className={open ? styles.DialogWrapper:styles.DialogWrapperHide} ref={dialogRef}>
      <div className={styles.DialogBox}>
        {props.children}                
      </div>
    </div>
  );
};

export default Dialog;
