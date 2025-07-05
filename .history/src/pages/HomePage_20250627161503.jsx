import React from "react";
import Navbar from "../component/navbar";
import { Link } from "react-router";

function HomePage() {
  return (
    <div>
      <Navbar />
      <h1>WorldWise</h1>
      <Link to="/app">Go to app</Link>
    </div>
  );
}

export default HomePage;
