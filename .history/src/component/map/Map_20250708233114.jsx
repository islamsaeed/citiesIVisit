import { useNavigate, useSearchParams } from "react-router";
import styles from "./Map.module.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { useState } from "react";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mapPosition, setmapPosition] = useState([40, 0]);
  const navigate = useNavigate();
  const lat = searchParams.get("lat");
  const lang = searchParams.get("lng");

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
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
