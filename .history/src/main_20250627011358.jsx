import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Pricing from "./pages/Pricing.jsx";
import HomePage from "./pages/HomePage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Pricing />} />
      <Route path="home" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
