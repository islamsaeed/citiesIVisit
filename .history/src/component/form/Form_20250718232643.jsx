// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.css";
import Button from "../button/Button";
import { useNavigate, useSearchParams } from "react-router";
import { useUrlPosition } from "../../hooks/useUrlPosition";
import Message from "../Message";
import Spinner from "../Spinner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [notes, setNotes] = useState("");
  const [isLoadingPosition, setIsLoadingPosition] = useState(false);
  const [emoji, setEmoji] = useState();
  const [geoCodingerror, setGeoCodingError] = useState("");
  const navigate = useNavigate();
  const [mapLat, mapLng] = useUrlPosition();

  useEffect(() => {
    async function getGeoLocation() {
      try {
        setIsLoadingPosition(true);
        setGeoCodingError("");
        let response = await fetch(
          `${BASE_URL}?latitude=${mapLat}&longitude=${mapLng}`
        );
        let data = await response.json();
        console.log(data);
        if (!data.countryCode) {
          throw new Error("that doesn`t to be  a city ");
        }
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (error) {
        setGeoCodingError(error.message);
      } finally {
        setIsLoadingPosition(false);
      }
    }
    getGeoLocation();
  }, [mapLat, mapLng]);
  function handelFormSubmit(e) {
    e.preventDefault;
    if (!cityName || !date) return;
    //create  the  added cirt object
    const newCity = {
      cityName,
      country,
      date,
      notes,
      emoji,
      position: { mapLat, mapLng },
    };
  }

  if (geoCodingerror) return <Message message={geoCodingerror} />;
  if (isLoadingPosition) return <Spinner />;
  if (!mapLat && !mapLng)
    return <Message message="start by clicking on the  map" />;

  return (
    <form className={styles.form} onSubmit={handelFormSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>

        <DatePicker
          id="date"
          showIcon
          isClearable
          closeOnScroll={true}
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat={"dd / MM / yyyy"}
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
        <Button
          type="back"
          onClick={(e) => {
            e.preventDefault;
            navigate(-1);
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
