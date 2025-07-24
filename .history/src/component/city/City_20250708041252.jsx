import { useParams } from "react-router";
import styles from "./City.module.css";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     weekday: "long",
//   }).format(new Date(date));

function City() {
  const { cities } = useCities();

  const { id } = useParams();

  const city = cities.find((city) => city.id === id);
  console.log("City data:", city);

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
