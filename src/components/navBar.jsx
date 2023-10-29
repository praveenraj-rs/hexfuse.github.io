import React from "react";
import "./navBar.css";
import Icon from "../icons/hexfuseIcon";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div className="brandIcon">
        <Link to="/">
          <Icon />
        </Link>
        <Link to={"/"}>
          <h1>HexFuse</h1>
        </Link>
      </div>

      <div>
        <ul className="links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to={"/members"}>Members</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
