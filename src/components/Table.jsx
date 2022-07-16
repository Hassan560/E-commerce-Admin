import React, { useState, useEffect } from "react";

import Table from "react-bootstrap/Table";
import { Avatar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseAuth";
import { toast } from "react-toastify";

const ProductsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const item = await getDocs(collection(db, "products"))
      console.log(item)
      setData(item.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  const deleteData = async (id) => {
    const docRef = doc(db, "products", id)
    await deleteDoc(docRef)
    toast("Your products deleted successfully", { type: "success", position: toast.POSITION.TOP_CENTER })
  }

  return (
    <div>
      {
        data.length === 0 ? (
          <h3 style={{textAlign: 'center'}}>No Products</h3>
        ): (

          <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Product image</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Price</th>
            <th>Product Rating</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody style={{ overflowY: "scroll" }}>
          {data.map((items, index) => {
            const { name, price, category, description,rating, imageUrl } = items.products
            return (
              <tr key={index}>
                <td style={{ paddingTop: "25px" }}>{index}</td>
                <td>
                  <Avatar sx={{ width: 60, height: 60, }} src={imageUrl} alt="src" />
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
                  {rating}
                </td>
                <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                  <IconButton>
                    <EditIcon color="success" />
                  </IconButton>
                </td>
                <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                  <IconButton onClick={(id) => deleteData(items.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </td>
              </tr>
            );
          }
          )}
        </tbody>
      </Table>
    )}
    </div>
  );
};

export default ProductsTable;
