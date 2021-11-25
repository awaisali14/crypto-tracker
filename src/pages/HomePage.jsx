import React from "react";
import Banner from "../components/Banner";
import CoinsTable from "../components/CoinsTable";

const HomePage = () => {
  // const ctx = useContext(Crypto);
  return (
    <React.Fragment>
      <Banner />
      <CoinsTable />
    </React.Fragment>
  );
};

export default HomePage;
