import { useParams } from "react-router";
import styles from "./City.module.css";
import { useCities } from "../../contexts/CitiesContext";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     weekday: "long",
//   }).format(new Date(date));

function City() {
  const { getCity, currentCity } = useCities();

  const { id } = useParams();

  const city = getCity(id);
  // const city = cities.find((city) => city.id === id);
  // console.log("City data:", city);

  if (!city) {
    return <h2 className={styles.error}>City not found</h2>;
  }
  return (
    <>
      <h1>City {id}</h1>
    </>
  );
}

export default City;
