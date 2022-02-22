import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../router"
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const homeIcon = <FontAwesomeIcon icon={faHome} className={classes.icon}/>


function Footer() {
  return (
    <div className={classes.footer}>
      <span>@Karla Jaramillo</span>
      
    </div>
  );
}

export default Footer;
