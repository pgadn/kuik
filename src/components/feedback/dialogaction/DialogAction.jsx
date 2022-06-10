import React from "react";
import styles from "./DialogAction.module.scss";

const DialogAction = (props) => {  

  return (
    <div className={styles.DialogAction}>
        {props.children}
    </div>
  );
};

export default DialogAction;
