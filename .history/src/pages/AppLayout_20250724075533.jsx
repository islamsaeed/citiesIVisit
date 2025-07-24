import Map from "../component/map/Map";
import SideBar from "../component/SideBar/SideBar";
import User from "../user/User";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <User />
      <Map />
    </div>
  );
}

export default AppLayout;
