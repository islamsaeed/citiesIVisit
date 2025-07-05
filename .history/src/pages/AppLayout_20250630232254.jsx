import Map from "../component/map/Map";
import SideBar from "../component/SideBar/SideBar";
import styles from "./AppLayout.module.css";
function AppLayout() {
  async function fetchCities() {
    try {
      const response = await fetch("http://localhost:9000/cities");
      if (!response.ok) {
        throw new Error("no data fetched from  json server");
      }
      return response.json();
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
