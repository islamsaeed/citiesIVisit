import React from "react";
import styles from "./Button.module.css";
function Button({ children, onClick, type }) {
  return (
    <div className={styles.btn} type={type} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
