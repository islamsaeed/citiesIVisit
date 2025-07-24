import { useNavigate, useSearchParams } from "react-router";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useCities } from "../../contexts/CitiesContext";
import { useState } from "react";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mapPosition, setmapPosition] = useState([40, 0]);

  const { cities } = useCities();
  const navigate = useNavigate();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer
        // center={[mapLat, mapLng]}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities?.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={[mapLat || 40, mapLng || 0]} />
      </MapContainer>
    </div>
  );
}
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
export default Map;
