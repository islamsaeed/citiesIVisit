import styles from "./Sidebar.module.css";
import Logo from "../Logo/Logo.jsx";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
    </div>
  );
}

export default SideBar;
