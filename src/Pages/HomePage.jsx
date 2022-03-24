import React from "react";

import "../App.css";
import Chart from "../components/Chart";
import Data from "../DummyData";
import BasicCard from "../components/Card";

const HomePage = () => {
  return (
    // <div className="homeContainer">
    <>
      <div className="cardContainer">
        <BasicCard name="Revenue" price="4520" className="card" />
        <BasicCard name="Orders" price="4875" className="card2" />
        <BasicCard name="Earning" price="9854" className="card3" />
      </div>
      {/* <div> */}
      <Chart data={Data} datakey="uv" grid />
      {/* </div> */}
    </>
    //  </div>
  );
};

export default HomePage;
