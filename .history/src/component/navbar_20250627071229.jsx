import React from "react";
import { NavLink } from "react-router";

function navbar() {
  return (
    <nav>
      <NavLink to="/">home</NavLink>
      <NavLink to="/product">product</NavLink>
      <NavLink to="/pricing">pricing</NavLink>
    </nav>
  );
}

export default navbar;
