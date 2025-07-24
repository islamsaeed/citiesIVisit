import { createContext, useEffect, useState } from "react";

const CitiesContext = createContext();

function CitiesProvider({ childern }) {
  //data
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //fetching cities from json server
  async function fetchCities() {
    try {
      setIsLoading(true);

      console.log("Fetching cities from json server...");
      const response = await fetch("http://localhost:9000/cities");

      if (!response.ok) {
        throw new Error("no data fetched from  json server");
      }

      //returned data cities
      const cities = await response.json();

      console.log("Cities fetched successfully", cities);
      setCities(cities);
    } catch (error) {
      console.error("Failed to fetch cities", error);
      setCities([]);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchCities();
    }, 2000);
  }, []);

  return (
    <citiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {childern}
    </citiesContext.Provider>
  );
}

export { CitiesProvider };
