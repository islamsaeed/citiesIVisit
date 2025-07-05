import { useEffect } from "react";
import Map from "../component/map/Map";
import SideBar from "../component/SideBar/SideBar";
import styles from "./AppLayout.module.css";
function AppLayout() {
  useEffect(
    async function fetchCities() {
      try {
        const response = await fetch("http://localhost:9000/cities");
        if (!response.ok) {
          throw new Error("no data fetched from  json server");
        }

        //returned data cities
        const cities = await response.json();

        console.log("Cities fetched successfully", cities);
        return cities;
      } catch (error) {
        console.error("Failed to fetch cities", error);
        return [];
      }
    },

    []
  );

  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
