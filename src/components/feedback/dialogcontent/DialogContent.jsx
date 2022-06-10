import React from "react";
import styles from "./DialogContent.module.scss";

const DialogContent = (props) => {  

  return (
    <div className={styles.DialogContent}>
        <p>{props.children}</p>
    </div>
  );
};

export default DialogContent;
