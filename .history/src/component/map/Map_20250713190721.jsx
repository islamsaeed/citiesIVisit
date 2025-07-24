import { useNavigate, useSearchParams } from "react-router";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import { useCities } from "../../contexts/CitiesContext";
import { useEffect, useState } from "react";

function Map() {
  const [searchParams] = useSearchParams();
  const [mapPosition, setmapPosition] = useState([40, 0]);

  const { cities } = useCities();

  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");
  useEffect(
    function () {
      if (mapLat && mapLng) setmapPosition([mapLat, mapLng]);
    },
    [mapLat, mapLng]
  );

  const getCurrentPosition = () => {
    windows.get;
  };
  return (
    <div className={styles.mapContainer}>
      {/* <MapContainer
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
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer> */}

      {console.log("getLocations", printo())}
    </div>
  );
}
function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position, 6);
  return null;
}
function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
export default Map;
