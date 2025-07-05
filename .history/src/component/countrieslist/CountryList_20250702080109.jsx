import styles from "./CountryList.module.css";
import Spinner from "../Spinner";
import CityItem from "../cityitem/CityItem";
import Message from "../Message";
import CountryItem from "../countryItem/CountryItem";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities || cities.length === 0)
    return (
      <Message
        message={"No cities found. Please add citiy by clicking  the  map."}
      />
    );

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country)) {
      return [...acc, { id: city.id, country: city.country }];
    }
    return acc;
  }, []);
  console.log("Countries:", countries);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
