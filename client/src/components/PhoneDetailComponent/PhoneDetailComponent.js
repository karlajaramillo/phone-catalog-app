import React  from "react";
import classes from "./PhoneDetailComponent.module.css";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";

function PhoneDetailComponent(props) {
  const { allData } = props;
  //console.log(allData)

  return (
    <Card key={allData.id} className={classes["phone-card"]}>
      <h1>{allData.name}</h1>
      <div>
        <img src={allData.images} alt="phone" />
      </div>
      <p><span>Price:</span> {allData.priceEuros} € </p>
      <p><span>Description</span>: {allData.description}</p>
      <p><span>Color</span> {allData.color} </p>
      <p><span>Capacity</span> {allData.capacity} </p>
      <p><span>Screen size</span> {allData.screenSizeInches} inches </p>
      

      <Button>Buy now!</Button>
    </Card>
  );
}

export default PhoneDetailComponent;
