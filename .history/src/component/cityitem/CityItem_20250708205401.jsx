import { useCities } from "../../contexts/CitiesContext";
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
  const { currentCity } = useCities();
  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time className={styles.date}>{formatDate(city.date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
