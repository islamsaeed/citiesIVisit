import { useSearchParams } from "react-router";
import styles from "./Map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  return <div className={styles.mapContainer}>Map</div>;
}

export default Map;
