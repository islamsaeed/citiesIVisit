import React, { createContext } from "react";

const citiesContext = createContext();

function CitiesProvider({ childern }) {
    //data

    return (
        <citiesContext.Provider value={ }>
            {childern}
      </citiesContext.Provider>
    )
}

export { CitiesProvider };
