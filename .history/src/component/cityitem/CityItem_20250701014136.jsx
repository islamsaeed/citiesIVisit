import React from "react";
import styles from "./CityItem.module.css";

const formatDate = (date) => {
  new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

function CityItem({ city }) {
  return (
    <li className={styles.cityItem}>
      <h3 className={styles.name}>{city.cityName}</h3>
      <span className={styles.emoji}>{city.emoji}</span>
      <time className={styles.date}>{city.date}</time>
    </li>
  );
}

export default CityItem;
