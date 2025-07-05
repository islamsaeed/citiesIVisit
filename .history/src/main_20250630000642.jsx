import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";
import Pricing from "./pages/Pricing.jsx";
import HomePage from "./pages/HomePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Product from "./pages/Product.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="product" element={<Product />} />
      <Route path="app" element={<AppLayout />}>
        <Route path="cities" element={<p>List of cities </p>}></Route>
        <Route path="countries" element={<p>List of countries</p>}></Route>
        <Route path="form" element={<p>Form element</p>}></Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
