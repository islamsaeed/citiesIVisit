import { useSearchParams } from "react-router";
import styles from "./Map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lang = searchParams.get("lang");

  return (
    <div className={styles.mapContainer}>
      Map lat : {lat} lang:{lang}
    </div>
  );
}

export default Map;
