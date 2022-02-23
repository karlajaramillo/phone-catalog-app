import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { PhoneDetailComponent } from "../../components/PhoneDetailComponent";
import { Spinner } from "../../components/UI/Spinner";

// using redux
import { useDispatch, useSelector } from "react-redux";
import {getDataPhone} from "../../store/actions/phoneAction";

function PhoneDetails() {
  const {id} = useParams();
    // Redux
    // const dispatch = useDispatch();
    // const phonesList = useSelector((state) => state.phonesList);
    // const { loading, error, phones } = phonesList;
    // React.useEffect(() => {
    //   dispatch(getPhoneById());
    // }, [id]);
  // Access the store via the `useContext` hook

  console.log(id);
  // const [data, setData] = React.useState(null);
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);

  // // request to API to get details data 
  // async function getPhoneDetails() {
  //   try {
  //     const { data } = await getPhoneById(id);
  //     setData(data);
  //     console.log(data)
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // // request every time the id changes
  // React.useEffect(() => {
  //   getPhoneDetails();
  // }, [id]);
 // Redux
 const dispatch = useDispatch();
 const phonesList = useSelector((state) => state.phonesList);
 const { loading, error, phone } = phonesList;
 React.useEffect(() => {
   dispatch(getDataPhone(id));
 }, [id, dispatch]);
  

  return (

     <Fragment>
           {loading ? (
        <Spinner />
      ) : error ? (
        error.message
      ) : (
        <PhoneDetailComponent allData={phone}/>
      )}
     {/* {loading && <Spinner/>}  
     {phone && <PhoneDetailComponent allData={phone} />} 
   */}
       {/* {data && <PhoneDetailComponent allData={data} />}  */}
     </Fragment>
  );
}

export default PhoneDetails;
