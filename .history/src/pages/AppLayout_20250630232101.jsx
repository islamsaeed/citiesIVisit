import Map from "../component/map/Map";
import SideBar from "../component/SideBar/SideBar";
import styles from "./AppLayout.module.css";
function AppLayout() {
  async function fetchCities() {
    try {
      const response = await fetch("http://localhost:9000/cities").then((res) =>
        res.json()
      );
      return response;
    } catch {
      console.error("Failed to fetch cities");
      return [];
    }
  }
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
