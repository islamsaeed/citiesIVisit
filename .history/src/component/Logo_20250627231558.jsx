import { Link } from "react-router";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <>
      <Link to="/">
        <img src="/logo.png" alt="WorldWise Logo" className={styles.logo} />
      </Link>
    </>
  );
}

export default Logo;
