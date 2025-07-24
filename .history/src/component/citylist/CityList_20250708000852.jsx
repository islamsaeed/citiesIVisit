import styles from "./CityList.module.css";
import Spinner from "../Spinner";
import CityItem from "../cityitem/CityItem";
import Message from "../Message";
import { useCities } from "../../contexts/CitiesContext";

function CityList({ cities, isLoading }) {
  const {} = useCities();
  if (isLoading) return <Spinner />;
  if (!cities) {
    return (
      <Message
        message={"No cities found. Please add citiy by clicking  the  map."}
      />
    );
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
