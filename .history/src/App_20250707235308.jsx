import { BrowserRouter, Navigate, Route, Routes } from "react-router";
// Importing necessary components and pages
import Pricing from "./pages/Pricing.jsx";
import HomePage from "./pages/HomePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Product from "./pages/Product.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import CityList from "./component/citylist/CityList.jsx";
import CountryList from "./component/countrieslist/CountryList.jsx";
import City from "./component/city/City.jsx";
import Form from "./component/form/Form.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route index element={<HomePage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          <Route path="cities/:id" element={<City cities={cities} />} />
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          ></Route>

          <Route path="form" element={<Form />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
