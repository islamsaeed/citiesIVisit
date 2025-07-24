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
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "city/loaded":
      return {
        ...state,

        currentCity: action.payload,
        isLoading: false,
      };
    case "cities/created": {
      return {
        ...state,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
        isLoading: false,
      };
    }
    case "cities/deleted": {
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
        isLoading: false,
        currentCity: {},
      };
    }
    case "rejected":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      throw new Error(`unknown action type ${action.type}`);
  }
}
function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function fetchCities() {
    try {
      // setIsLoading(true);
      dispatch({ type: "loading" });
      console.log("Fetching cities from json server...");
      const response = await fetch(`${BASE_URL}/cities`);
      const cities = await response.json();
      dispatch({ type: "cities/loaded", payload: cities });
      if (!response.ok) {
        throw new Error("no data fetched from  json server");
      }
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: `failed to fetch cities ${error.message}`,
      });
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchCities();
    }, 2000);
  }, []);

  async function getCity(id) {
    if (id === currentCity.id) return;
    dispatch({ type: "loading" });
    try {
      const response = await fetch(`${BASE_URL}/cities/${id}`);
      const currentCity = await response.json();

      dispatch({ type: "city/loaded", payload: currentCity });
      if (!response.ok) {
        throw new Error(`failed to  fetch  current city wrong ${id}`);
      }
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: `failed to fetch current city ${error.message}`,
      });
    }
  }

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await response.json();
      // setCities((cities) => [...cities, data]);
      dispatch({ type: "cities/created", payload: data });
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: `failed to fetch current city ${error.message}`,
      });
    }
    // } finally {
    //   setIsLoading(false);
    // }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      const response = await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "cities/deleted", payload: id });

      if (!response.ok) {
        throw new Error(`failed to delete city with id ${id}`);
      }

      // setCities((cities) => cities.filter((city) => city.id !== id));
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: `failed to fetch current city ${error.message}`,
      });
    }
    // } finally {
    //   setIsLoading(false);
    // }
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
        error,
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
