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
      <div>
        <img src={phone.images} alt="phone" />
      </div>
      <p><span>Price:</span> {phone.priceEuros} € </p>
      <p><span>Description</span>: {phone.description}</p>
      <p><span>Color</span> {phone.color} </p>
      <p><span>Capacity</span> {phone.capacity} </p>
      <p><span>Screen size</span> {phone.screenSizeInches} inches </p>
      

      <Button>Buy now!</Button>
    </Card>
  );
}

export default PhoneDetailComponent;
