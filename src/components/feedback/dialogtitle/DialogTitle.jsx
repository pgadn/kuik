import React from "react";
import styles from "./DialogTitle.module.scss";

const DialogTitle = (props) => {
  const { size, title, content, open, onClose } = props;

  return (
    <div className={styles.DialogTitle}>
        {props.children}
    </div>
  );
};

export default DialogTitle;
