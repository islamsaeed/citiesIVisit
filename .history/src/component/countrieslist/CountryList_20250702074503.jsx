import styles from "./CountryList.module.css";
import Spinner from "../Spinner";
import CityItem from "../cityitem/CityItem";
import Message from "../Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities || cities.length === 0)
    return (
      <Message
        message={"No cities found. Please add citiy by clicking  the  map."}
      />
    );

  const countries = [...new Set(cities.map((city) => city.country))];
  const citiesByCountry = countries.map((country) => ({
    country,
    cities: cities.filter((city) => city.country === country),
  }));

  return (
    <ul className={styles.countriesList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CountryList;
