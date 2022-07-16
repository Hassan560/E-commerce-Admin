import React, { useContext, useState } from "react";

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

import { db, storage } from "../../Firebase/FirebaseAuth";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { toast } from "react-toastify";

const AddProduct = () => {
  const navigate = useNavigate();

  const { products, setProducts } = useContext(AuthContext);

  const [progress, setProgress] = useState(0)

  const getValue = (e) => {
    setProducts({
      ...products,
      [e.target.name]: e.target.value,
    });
  };
  const getImage = (e) => {
    setProducts({
      ...products,
      imageUrl: e.target.files[0]
    })
  }

  const submit = async (e) => {
    if (!products.name && !products.category && !products.price) {
      alert('Please fill the form')
      return
    }
    const storageRef = ref(storage, `/images/${Date.now()}${products.imageUrl.name}`)

    const uploadImage = uploadBytesResumable(storageRef, products.imageUrl)

    uploadImage.on("state_changed", (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      setProgress(progress)
    },
      (err) => {
        console.log(err)
      },
      () => {
        setProducts({
          name: "",
          category: "",
          price: "",
          description: "",
          rating: "",
          imageUrl: "",
        })
        getDownloadURL(uploadImage.snapshot.ref)
          .then((url) => {
            const addData = collection(db, "products")
            addDoc(addData, {
              products: {
                name: products.name,
                category: products.category,
                price: products.price,
                description: products.description,
                rating: products.rating,
                imageUrl: url,
                time: Timestamp.fromDate(new Date())
              }
            })
              .then(() => {
                toast("Products added successfully", { type: 'success', position: toast.POSITION.TOP_CENTER })
                setProgress(0)
              })
              .catch((err) => {
                toast("Error adding products", { type: 'error', position: toast.POSITION.TOP_CENTER })
              })
          })
      }
    )
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
          <form autoComplete="Off">
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
                required
                fullWidth
                type="number"
                label="Rating"
                value={products.rating}
                onChange={getValue}
                name="rating"
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <TextField
                fullWidth
                required
                type="file"
                accept="image/jpg"
                value={products.image}
                onChange={getImage}
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
