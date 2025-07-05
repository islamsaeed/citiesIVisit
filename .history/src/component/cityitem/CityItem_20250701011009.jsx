import React from "react";
import styles from "./CityItem.module.css";
function CityItem({ city }) {
  return (
    <li className={styles.cityItem}>
      {city.cityName}
      <span className={styles.emoji}></span>
    </li>
  );
}

export default CityItem;
