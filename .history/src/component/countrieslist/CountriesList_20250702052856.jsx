import styles from "./CountriesList.module.css";
import Spinner from "../Spinner";
import CityItem from "../cityitem/CityItem";
import Message from "../Message";

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities || cities.length === 0)
    return (
      <Message
        message={"No cities found. Please add citiy by clicking  the  map."}
      />
    );
  return (
    <ul className={styles.countriesList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CountriesList;
