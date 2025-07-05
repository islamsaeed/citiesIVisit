import React from "react";
import styles from "./CityItem.module.css";
function CityItem({ city }) {
  return <div className={styles.cityItem}>{city.cityName}</div>;
}

export default CityItem;
