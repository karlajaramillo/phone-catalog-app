import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../router";
import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

const logo = <FontAwesomeIcon icon={faPodcast} className={`${classes.icon} fa-beat`}/>;

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul className={classes["navbar-wrapper"]}>
        <li>
          <Link className={classes.logo} to={ROUTES.root}>
            {" "}
            {logo} MobileMe
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
