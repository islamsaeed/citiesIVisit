import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
const BASE_URL = "http://localhost:9000";
const CitiesContext = createContext();
const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
};
function reducer(state, action) {
  switch (action.type) {
    case "cities/loaded": {
      return {
        ...state,
        cities: action.payload,
        isLoading: false,
      };
    }
  }
}
function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  //data as state
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentcity] = useState({});
  //fetching cities from json server
  async function fetchCities() {
    try {
      setIsLoading(true);
      console.log("Fetching cities from json server...");
      const response = await fetch(`${BASE_URL}/cities`);

      if (!response.ok) {
        throw new Error("no data fetched from  json server");
      }
      const cities = await response.json();
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

  async function getCity(id) {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await response.json();
      setCurrentcity(data);
      if (!response.ok) {
        throw new Error(`failed to  fetch  current city wrong ${id}`);
      }
    } catch (error) {
      alert("failed to load current city", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await response.json();
      setCities((cities) => [...cities, data]);
    } catch (error) {
      alert("failed to create new city", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      const response = await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });

      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (error) {
      alert("failed to delete city", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
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
