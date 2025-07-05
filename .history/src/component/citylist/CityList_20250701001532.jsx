import { useEffect } from "react";
import styles from "./CityList.module.css";
import { useState } from "react";
function CityList() {
  useState;
  //fetching cities from json server
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
  }

  useEffect(() => {
    fetchCities();
  }, []);

  return <ul className={styles.CityList}>CityList</ul>;
}

export default CityList;
