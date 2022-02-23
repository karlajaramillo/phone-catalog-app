import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { PhoneDetailComponent } from "../../components/PhoneDetailComponent";
import { useSelector } from "react-redux";

function PhoneDetails() {
  // get id from the route
  const { id } = useParams();

  const data = useSelector((state) => state.phonesList.phones);

  const phone = data.find((item) => item.id === id);

  return (
    <Fragment>
      <PhoneDetailComponent allData={phone} />
    </Fragment>
  );
}

export default PhoneDetails;
