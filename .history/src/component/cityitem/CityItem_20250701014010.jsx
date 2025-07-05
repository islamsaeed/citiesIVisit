import React from "react";
import styles from "./CityItem.module.css";
function CityItem({ city }) {
  return (
    <li className={styles.cityItem}>
      <h3 className={styles.name}>{city.cityName}</h3>
      <span className={styles.emoji}>{city.emoji}</span>
    </li>
  );
}

export default CityItem;
