import { NavLink } from "react-router";
import { nav } from "./AppNav.module.css";
function AppNav() {
  return (
    <div className={nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;
