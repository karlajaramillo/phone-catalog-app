import React, { Fragment } from "react";
import classes from "./PhoneDetails.module.css";
import { useParams } from "react-router-dom";
import { getPhoneById } from "../../api";
import { PhoneListContainer } from "../../components/PhoneListContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const spin = <FontAwesomeIcon icon={faSpinner} className={`${classes.icon} fa-spin`}/>;




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
    {loading && spin}    
      {/* {data && <PhoneDetailComponent allData={data} />} */}
    </Fragment>
  );
}

export default PhoneDetails;
