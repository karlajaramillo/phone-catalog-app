import React, { Fragment } from "react";
import classes from "./Home.module.css";
import { getPhones } from "../../api";
import { Spinner } from "../../components/UI/Spinner";
import { PhoneListContainer } from "../../components/PhoneListContainer";
// using redux
import { useDispatch, useSelector } from "react-redux";
import { getDataPhones } from "../../store/actions/phoneAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const arrowIcon = <FontAwesomeIcon icon={faAnglesDown} className={`${classes.arrowIcon} fa-fade`}/>;


function Home() {
  //// Using useState
  // const [data, setData] = React.useState(null);
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(true);

  // // request to API to get the phones data
  // async function getAllPhones() {
  //   try {
  //     const { data } = await getPhones();
  //     setData(data);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // React.useEffect(() => {
  //   getAllPhones();
  // }, []);

  // Redux
  const dispatch = useDispatch();
  console.log(dispatch)
  const phonesList = useSelector((state) => state.phonesList);
  console.log(phonesList)
  const { loading, error, phones } = phonesList;
  React.useEffect(() => {
    dispatch(getDataPhones());
  }, [dispatch]);

  return (
    <Fragment>
      <div className={classes.backgroundHome}>
      <h1 className={classes.title}>Discover the latest phones!</h1>
{arrowIcon}
      </div>
      {/* {loading && <Spinner/>} */}
      {loading ? (
        <Spinner />
      ) : error ? (
        error.message
      ) : (
        <PhoneListContainer allData={phones} />
      )}
      {/* {data && <PhoneListContainer allData={data} />} */}
    </Fragment>
  );
}

export default Home;
