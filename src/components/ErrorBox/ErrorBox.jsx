import React from "react";
import styles from "./ErrorBox.module.scss";

const ErrorBox = (props) => {
  return props.error ? (
    <div className={styles.ErrorBox}>
      <h1>Error</h1>
      <p>{props.error}</p>
    </div>
  ) : (
    <></>
  );
};

export default ErrorBox;
