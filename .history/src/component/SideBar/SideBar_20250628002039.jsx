import styles from "./Sidebar.module.css";
import Logo from "../Logo/Logo.jsx";
import AppNav from "../AppNav.jsx";
import Footer from "../footer/Footer.jsx";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <Footer />
    </div>
  );
}

export default SideBar;
