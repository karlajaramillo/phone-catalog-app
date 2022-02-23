import React, { Fragment } from "react";
import classes from "./Home.module.css";
import { Spinner } from "../../components/UI/Spinner";
import { PhoneListContainer } from "../../components/PhoneListContainer";
// using redux
import { useDispatch, useSelector } from "react-redux";
import { getDataPhones } from "../../store/actions/phoneAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const arrowIcon = (
  <FontAwesomeIcon
    icon={faAnglesDown}
    className={`${classes.arrowIcon} fa-fade`}
  />
);

function Home() {
  // Redux
  const dispatch = useDispatch();
  const phonesList = useSelector((state) => state.phonesList);
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
      {loading ? (
        <Spinner />
      ) : error ? (
        error.message
      ) : (
        <PhoneListContainer allData={phones} />
      )}
    </Fragment>
  );
}

export default Home;
