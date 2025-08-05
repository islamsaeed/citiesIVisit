import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
// Importing necessary components and pages
// import Pricing from "./pages/Pricing.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import PageNotFound from "./pages/PageNotFound.jsx";
// import Product from "./pages/Product.jsx";
// import AppLayout from "./pages/AppLayout.jsx";
// import Login from "./pages/login/Login.jsx";

import CityList from "./component/citylist/CityList.jsx";
import CountryList from "./component/countrieslist/CountryList.jsx";
import City from "./component/city/City.jsx";
import Form from "./component/form/Form.jsx";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route index element={<HomePage />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="product" element={<Product />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />}></Route>
              <Route path="form" element={<Form />}></Route>
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
