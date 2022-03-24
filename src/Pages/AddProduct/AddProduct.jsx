import React, { useContext } from "react";

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
  TextField,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/ProductsProvider";

// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { db } from "../../Firebase/FirebaseAuth";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const AddProduct = () => {
  const navigate = useNavigate();

  const { products, setProducts } = useContext(AuthContext);

  const getValue = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    if (products.name && products.category && products.price) {
      e.preventDefault();

      try {
        await addDoc(collection(db, "products"), {
          products, 
          time: Timestamp.fromDate(new Date()),
        });
        alert("added successfully");
        setProducts({
          name: "",
          category: "",
          price: "",
          description: "",
          image: "",
        });
      } catch (e) {
        console.error("error adding doc", e);
      }
    } else {
      alert("error");
    }
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
          <form>
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
              <TextField
                fullWidth
                required
                type="file"
                value={products.image}
                onChange={getValue}
                name="image"
              />
            </div>
          </form>
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
