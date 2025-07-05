import styles from "./CityList.module.css";
import Spinner from "../Spinner";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return <ul className={styles.CityList}>CityList</ul>;
}

export default CityList;
