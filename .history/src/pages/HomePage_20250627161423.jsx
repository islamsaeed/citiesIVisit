import React from "react";
import Navbar from "../component/navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <h1>WorldWise</h1>
      <link to="/app">Go to Home</link>
    </div>
  );
}

export default HomePage;
