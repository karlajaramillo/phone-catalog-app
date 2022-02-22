// Custom component that only return with props.children--> what is inside the component
import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}> {props.children}</div>
};

export default Card;