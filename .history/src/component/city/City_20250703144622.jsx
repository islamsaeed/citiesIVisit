import { useParams, useSearchParams } from "react-router";
import styles from "./City.module.css";

// const formatDate = (date) =>
//   new Intl.DateTimeFormat("en", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     weekday: "long",
//   }).format(new Date(date));

function City({ cities }) {
  const { id } = useParams();
  const [searchParams, setSearchparams] = useSearchParams();
  const Lat = searchParams.get("lat");
  const Lang = searchParams.get("lang");

  console.log("Search params:", Lat, Lang);

  setSearchparams({
    lat: 1,
    lang: 2,
  });

  const city = cities.find((city) => city.id === id);
  console.log("City data:", city);
  return <h1>City {id}</h1>;
}

export default City;
