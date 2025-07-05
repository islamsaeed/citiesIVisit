import React from "react";
import { NavLink } from "react-router";
import styles from "./Navbar.module.css";
function PageNav() {
  return (
    <nav className={`${styles.nav}`}>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
