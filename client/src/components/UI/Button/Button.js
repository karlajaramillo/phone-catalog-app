// Custom component that only return with props.children--> what is inside the component

import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button 
      className={`${classes.button} ${props.className}`}  // accepts 'props.className' -> other classes 
      type={props.type || 'button'} // by default is 'button' or change it via props.type
      onClick={props.onClick} // accepts the props.onClick
      >
        {props.children}
      </button>
  )
};

export default Button;