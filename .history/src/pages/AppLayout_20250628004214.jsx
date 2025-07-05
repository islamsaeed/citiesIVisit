import SideBar from "../component/SideBar/SideBar";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <SideBar />
    </div>
  );
}

export default AppLayout;
