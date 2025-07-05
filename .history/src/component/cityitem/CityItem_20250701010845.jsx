import React from "react";
import styles from "./CityItem.module.css";
function CityItem({ city }) {
  return (
    <li className={styles.cityItem}>
      <li>{city.cityName}</li>
    </li>
  );
}

export default CityItem;
