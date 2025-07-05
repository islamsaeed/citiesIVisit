import styles from "./CityList.module.css";
import Spinner from "../Spinner";
import CityItem from "../cityitem/CityItem";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
