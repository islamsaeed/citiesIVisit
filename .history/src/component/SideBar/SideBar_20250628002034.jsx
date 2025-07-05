import styles from "./Sidebar.module.css";
import Logo from "../Logo/Logo.jsx";
import AppNav from "../AppNav.jsx";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
    </div>
  );
}

export default SideBar;
