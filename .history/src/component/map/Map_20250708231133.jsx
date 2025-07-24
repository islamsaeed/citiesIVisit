import { useNavigate, useSearchParams } from "react-router";
import styles from "./Map.module.css";
import { MapContainer } from "https://cdn.esm.sh/react-leaflet/MapContainer";
import { TileLayer } from "https://cdn.esm.sh/react-leaflet/TileLayer";
import { useMap } from "https://cdn.esm.sh/react-leaflet/hooks";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lang = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
