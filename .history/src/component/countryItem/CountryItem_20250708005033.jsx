import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      {/* <span>{country.emoji}</span> */}
      <span>{country.country}</span>
      <span>{country.emoji}</span>
      {console.log("x", country)}
    </li>
  );
}

export default CountryItem;
