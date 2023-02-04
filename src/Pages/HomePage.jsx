import React, { useEffect, useState } from "react";

import "../App.css";
import Chart from "../components/Chart";
// import Data from "../DummyData";
import BasicCard from "../components/Card";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [orders, setOrders] = useState([]);

  const fetchData = async () => {
    await fetch("http://192.168.1.109:5000/books")
      .then((result) => result.json())
      .then((data) => setBooks(data));

    await fetch("http://192.168.1.109:5000/orders")
      .then((result) => result.json())
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="homeContainer">
      <div className="cardContainer">
        <BasicCard
          name="Total Products"
          price={books.length}
          className="card"
        />
        <BasicCard
          name="Total Orders"
          price={orders.length}
          className="card2"
        />
        <BasicCard name="Total Users" price="9854" className="card3" />
      </div>
      <div>
        <Chart data={books.length}  grid />
      </div>
    </div>
  );
};

export default HomePage;
