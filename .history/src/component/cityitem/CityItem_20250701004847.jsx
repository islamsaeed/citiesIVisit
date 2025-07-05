import React from "react";
import styles from "./CityItem.module.css";
function CityItem({ city }) {
  return <div className={styles.CityItem}>{city.name}</div>;
}

export default CityItem;
