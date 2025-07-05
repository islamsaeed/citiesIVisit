import { useEffect, useState } from "react";
import styles from "./CityList.module.css";

function CityList() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //fetching cities from json server
  async function fetchCities() {
    try {
      setIsLoading;
      true;
      console.log("Fetching cities from json server...");
      const response = await fetch("http://localhost:9000/cities");

      if (!response.ok) {
        throw new Error("no data fetched from  json server");
      }

      //returned data cities
      const cities = await response.json();

      console.log("Cities fetched successfully", cities);
      setCities(cities);
    } catch (error) {
      console.error("Failed to fetch cities", error);
      setCities([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCities();
  }, []);

  return <ul className={styles.CityList}>CityList</ul>;
}

export default CityList;
