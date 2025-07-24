import { createContext } from "react";

const citiesContext = createContext();

function CitiesProvider({ childern }) {
  //data

  return (
    <citiesContext.Provider value={"data"}>{childern}</citiesContext.Provider>
  );
}

export { CitiesProvider };
