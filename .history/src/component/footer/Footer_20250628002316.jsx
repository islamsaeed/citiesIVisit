import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>
        &copy {new Date().getFullYear()} islam saeed
      </p>
    </div>
  );
}

export default Footer;
