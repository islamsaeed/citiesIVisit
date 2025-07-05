import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Pricing from "./pages/Pricing.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path={pricing} element={<pricing />} />
    </Routes>
  </BrowserRouter>
);
