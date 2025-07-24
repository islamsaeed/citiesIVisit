import { useNavigate, useSearchParams } from "react-router";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useCities } from "../../contexts/CitiesContext";
import { useState } from "react";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mapPosition, setmapPosition] = useState([38.727881642324164, 0]);

  const { cities } = useCities();
  const navigate = useNavigate();
  // const lat = searchParams.get("lat");
  // const lang = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities?.map((city, idx) => {
          const positions = city.position;
          console.log("positions", positions);
        })}
        <Marker position={mapPosition}>
          <Popup>
            islam saeed <br />
            you did it
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
