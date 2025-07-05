import { Link } from "react-router";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <>
      <Link></Link>
      <Link to="/" className={styles.logo}>
        <img src="/logo.png" alt="WorldWise Logo" />
      </Link>
    </>
  );
}

export default Logo;
