import React, { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";
import { Avatar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import { AuthContext } from "../Context/ProductsProvider";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/FirebaseAuth";

const ProductsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const item = await getDocs(collection(db, "products"));
      setData(item.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  return (
    <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Product image</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody style={{ overflowY: "scroll" }}>
          {data.map((items, index) => {
            const {name, price,category,description,image} = items.products
            return (
              <tr key={index}>
                <td style={{ paddingTop: "25px" }}>{index}</td>
                <td>
                  <Avatar sx={{ width: 60, height: 60 }} src={image} />
                </td>
                <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                  {name}
                </td>
                <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                  {category}
                </td>
                <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                  {price}
                </td>
                <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                  <IconButton>
                    <EditIcon color="success" />
                  </IconButton>
                </td>
                <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                  <IconButton>
                    <DeleteIcon color="error" />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductsTable;
