import React, { useState } from "react";
import { Button, Divider, TextField } from "@mui/material";

import ProductsTable from "../../components/Table";

import { useNavigate } from "react-router-dom";

import "./Products.css";

const Products = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div className="productContainer">
        <div className="productHeader">
          <h2>BOOKS</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "100px" }}>
            <TextField
              size="small"
              label="Search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div>
              <Button
                onClick={() => navigate("/addproduct")}
                variant="contained"
              >
                Create
              </Button>
            </div>
          </div>
        </div>
        <Divider />
        <div className="table">
          <ProductsTable searchInput={searchInput} />
        </div>
      </div>
    </>
  );
};

export default Products;
