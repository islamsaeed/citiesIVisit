// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.css";
import Button from "../button/Button";
import { useNavigate, useSearchParams } from "react-router";
import { useUrlPosition } from "../../hooks/useUrlPosition";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
//countryCode

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [notes, setNotes] = useState("");
  const [isLoadingPosition, setIsLoadingPosition] = useState(false);
  const navigate = useNavigate();
  convertToEmoji();
  const [mapLat, mapLng] = useUrlPosition();
  console.log(mapLat);

  useEffect(() => {
    async function getGeoLocation() {
      try {
        setIsLoadingPosition(true);
        let response = await fetch(
          `${BASE_URL}?latitude=${mapLat}&longitude=${mapLng}`
        );
        let data = await response.json();
        console.log(data);
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
      } catch (error) {
        throw new Error(`no no ${error}`);
      } finally {
        setIsLoadingPosition(false);
      }
    }
    getGeoLocation();
  }, [mapLat, mapLng]);

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">add</Button>
        <Button type="back" onClick={() => navigate(-1)}>
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
