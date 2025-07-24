import styles from "./Button.module.css";
function Button({ children, onClick, type }) {
  return (
    <div
      type="submit"
      className={`${styles.btn} ${styles[type]} `}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;
