import React from "react";
import styles from "./Progress.module.scss";
import CircleSVG from "../../../styles/icons/Progress/Circle";
import classNames from "classnames";

const Progress = (props) => {
  const { color, size } = props;

  return (
    <div className={styles.ProgressWrapper}>
      {/* <CircleSVG className={styles.rotate} /> */}
      <CircleSVG
        className={classNames(
          styles.rotate,
          color && styles[`Progress_Variant__${color}`]
        )}
        classNameSVG={classNames(
            styles.defaultSVG,
            size && styles[`Progress_Size__${size}`],
        )}
      />
    </div>
  );
};

export default Progress;
