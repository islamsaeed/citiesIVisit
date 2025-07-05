import styles from "./Sidebar.module.css";
import Logo from "../Logo.jsx";
import AppNav from "../AppNav.jsx";
import Footer from "../footer/Footer.jsx";
import { Outlet } from "react-router";
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default SideBar;
