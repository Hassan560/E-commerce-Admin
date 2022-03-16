import React, { useState } from "react";

// addproduct css
import "./AddProduct.css";

// icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveAltIcon from "@mui/icons-material/SaveAlt";

import {
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const AddProduct = () => {
  const [products, setProducts] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });

  const navigate = useNavigate();

  const Input = styled("input")({
    display: "none",
  });

  const getValue = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(products);
  };

  return (
    <div className="addproductContainer">
      <div className="addproductheader">
        <h2>ADD-PRODUCTS</h2>
        <div>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
        </div>
      </div>
      <Divider />
      <div className="form">
        <Container maxWidth="sm">
          <div style={{ marginTop: "10px" }}>
            <TextField
              required
              fullWidth
              label="Product-Name"
              value={products.name}
              onChange={getValue}
              name="name"
            />
          </div>
          <div style={{ marginTop: "30px" }}>
            <TextField
              required
              fullWidth
              label="Category"
              value={products.category}
              onChange={getValue}
              name="category"
            />
          </div>
          <div style={{ marginTop: "30px" }}>
            <TextField
              required
              fullWidth
              type="number"
              label="Price"
              value={products.price}
              onChange={getValue}
              name="price"
            />
          </div>
          <div style={{ marginTop: "30px" }}>
            <TextField
              fullWidth
              multiline
              label="Description"
              value={products.description}
              onChange={getValue}
              name="description"
            />
          </div>
          <div style={{ marginTop: "30px" }}>
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                name="image"
              />
              <Button
                variant="contained"
                value={products.image}
                onChange={getValue}
                color="info"
                component="span"
              >
                Upload Image
              </Button>
            </label>
          </div>
          <div className="savebtn">
            <Button
              variant="contained"
              onClick={submit}
              endIcon={<SaveAltIcon />}
            >
              Save
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AddProduct;
