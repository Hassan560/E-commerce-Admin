import React from "react";

import Card from "../components/Card";

import "../App.css";
import Chart from "../components/Chart";
import Data from "../DummyData";

const HomePage = () => {
  return (
    // <div className="homeContainer">
    <>
      <div className="cardContainer">
        <Card name="Revenue" price="4520" className="card" />
        <Card name="Orders" price="4875" className="card2" />
        <Card name="Earning" price="9854" className="card3" />
      </div>
      {/* <div> */}
        <Chart data={Data} datakey="uv" grid />
      {/* </div> */}
    </>
    //  </div>
  );
};

export default HomePage;
