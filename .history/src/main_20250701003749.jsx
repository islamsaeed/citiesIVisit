import { createRoot } from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router";
import Pricing from "./pages/Pricing.jsx";
import HomePage from "./pages/HomePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Product from "./pages/Product.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import "./index.css";
import Login from "./pages/Login.jsx";
import CityList from "./component/citylist/CityList.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
