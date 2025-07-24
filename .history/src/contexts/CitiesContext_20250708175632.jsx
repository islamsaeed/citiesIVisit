import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  //data
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentcity, setCurrentcity] = useState();
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
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error(
      "there is  no  context  here you are out of the context provider"
    );
  return context;
}
export { CitiesProvider, useCities };
