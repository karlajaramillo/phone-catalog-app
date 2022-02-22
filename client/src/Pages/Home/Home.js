import React, { Fragment } from "react";
import classes from "./Home.module.css";
import { getPhones } from "../../api";
import { PhoneListContainer } from "../../components/PhoneListContainer";

function Home() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  // request to API to get the phones data
  async function getAllPhones() {
    try {
      const { data } = await getPhones();
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <Fragment>
    <h1 className={classes.title}>Discover the latest phones!</h1>
    {loading && <p>Loading!</p>}
      {data && <PhoneListContainer allData={data} />}
    </Fragment>
  );
}

export default Home;
