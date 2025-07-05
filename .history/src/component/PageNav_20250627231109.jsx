import React from "react";
import { NavLink } from "react-router";
import styles from "./PageNav.module.css"; // Adjust the path as needed
function PageNav() {
  return (
    <nav className={`${styles.nav}`}>
      <ul>
        {/* <li>
          <NavLink to="/">home</NavLink>
        </li> */}
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
