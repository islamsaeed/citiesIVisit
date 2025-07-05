import React from "react";
import styles from "./CityItem.module.css";
function CityItem({ city }) {
  return (
    <div className={styles.cityItem}>
      <li>{city.cityName}</li>
    </div>
  );
}

export default CityItem;
