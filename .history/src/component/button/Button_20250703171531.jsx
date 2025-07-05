import React from "react";
import styles from "./Button.module.css";
function Button({ children, onClick, type }) {
  return (
    <div
      className={`${styles.btn} ${
        type === "primary"
          ? styles.primary
          : type === "position"
          ? styles.position
                  : " styles.position"
              ? type === 'back' ? styles.back
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
