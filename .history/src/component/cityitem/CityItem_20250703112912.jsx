import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
};

function CityItem({ city }) {
  return (
    <Link to={`/cities/${city.id}`}>
      <li className={styles.cityItem}>
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </li>
    </Link>
  );
}

export default CityItem;
