import React  from "react";
import classes from "./PhoneDetailComponent.module.css";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";

function PhoneDetailComponent(props) {
  const { allData } = props;
  console.log(allData)

  const [phone, setPhone] = React.useState(allData);



  return (
    <Card key={phone.id} className={classes["phone-card"]}>
      <h1>{phone.name}</h1>
      <p>Price: {phone.priceEuros} € </p>
      <p>Description: {phone.description}</p>
      <p>Description: {phone.color} </p>
      <p>Capacity: {phone.capacitys} </p>
      <p>Screen size: {phone.screenSizeInches} inches </p>
      
      <div>
        <img src={phone.images} alt="phone" />
      </div>
      <Button>Buy now!</Button>
    </Card>
  );
}

export default PhoneDetailComponent;
