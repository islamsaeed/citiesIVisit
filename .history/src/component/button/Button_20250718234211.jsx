import styles from "./Button.module.css";
function Button({ children, onClick, type }) {
  console.log(type);
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[type]} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
