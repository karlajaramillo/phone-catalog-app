import React, { Fragment } from "react";
import classes from "./PhoneDetails.module.css";
import { useParams } from "react-router-dom";
import { getPhoneById } from "../../api";
import { PhoneDetailComponent } from "../../components/PhoneDetailComponent";
import { Spinner } from "../../components/UI/Spinner";


function PhoneDetails() {
  const {id} = useParams();
  console.log(id);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  // request to API to get details data 
  async function getPhoneDetails() {
    try {
      const { data } = await getPhoneById(id);
      setData(data);
      console.log(data)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  // request every time the id changes
  React.useEffect(() => {
    getPhoneDetails();
  }, [id]);

  

  return (
    <Fragment>
    {loading && <Spinner/>}    
       {data && <PhoneDetailComponent allData={data} />} 
    </Fragment>
  );
}

export default PhoneDetails;
