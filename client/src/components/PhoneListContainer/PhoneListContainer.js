import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./PhoneListContainer.module.css";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";

function PhoneListContainer(props) {
  const { allData } = props;

  const cardPhone = allData.map((phone) => {
    return (
      <Card key={phone.id} className={classes["phone-card"]}>
      <Link to={`/phones/${phone.id}`}>
        <h1>{phone.name}</h1>
        <p>Price: {phone.priceEuros} € </p>
        <div>
          <img src={phone.images} alt="phone" />
        </div>
        </Link>
        <Button>Buy now!</Button>
      </Card>
    );
  });

  return (
    <Fragment>
      <div className={classes.wrapper}>{cardPhone}</div>
    </Fragment>
  );
}

export default PhoneListContainer;
