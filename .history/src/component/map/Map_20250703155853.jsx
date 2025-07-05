import { useSearchParams } from "react-router";
import styles from "./Map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lang = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <h2>
        Map lat : {lat}
        <br />
        lang:{lang}
      </h2>
    </div>
  );
}

export default Map;
