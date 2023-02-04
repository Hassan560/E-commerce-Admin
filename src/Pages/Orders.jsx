import { Avatar, Divider, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { SyncLoader } from "react-spinners";

import "./Products/Products.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const fetchData = async () => {
    await fetch("http://192.168.1.109:5000/orders")
      .then((result) => result.json())
      .then((data) => setOrders(data));
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      fetchData();
    }, 1000);
  }, []);

  return (
    <div className="productContainer">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 5
        }}
      >
        <h2>Orders</h2>
        <TextField
          size="small"
          label="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <Divider />
      <Table responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>AuthorName</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        {loader ? (
          <div
            style={{
              position: "absolute",
              top: "315px",
              right: "790px",
              border: "none",
            }}
          >
            <SyncLoader color="#4D4867" margin={2} />
          </div>
        ) : (
          <tbody style={{ overflowY: "scroll" }}>
            {orders.map((elem) => {
              const { bookOrder } = elem;
              return bookOrder.filter(name => name.Name.toLowerCase().includes(searchInput)).map((elem) => {
                const {
                  _id,
                  Name,
                  AuthorName,
                  Image,
                  Price,
                  Description,
                  Status,
                  Category,
                } = elem;
                return (
                  <tr key={_id}>
                    <td style={{ paddingTop: "25px" }}>{_id}</td>
                    <td>
                      <Avatar
                        sx={{ width: 60, height: 60 }}
                        src={Image}
                        alt="src"
                      />
                    </td>
                    <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                      {Name}
                    </td>
                    <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                      {AuthorName}
                    </td>
                    <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                      {Price}
                    </td>
                    <td
                      style={{
                        fontSize: "20px",
                        paddingTop: "20px",
                        numberOfLines: "1",
                      }}
                    >
                      {Description.length < 35
                        ? `${Description}`
                        : `${Description.substring(0, 32)}...`}
                    </td>
                    <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                      {Category}
                    </td>
                    <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                      {Status}
                    </td>
                  </tr>
                );
              });
            })}
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default Orders;
