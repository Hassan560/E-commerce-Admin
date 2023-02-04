import React, { useState, useEffect } from "react";

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

import { useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

// addproduct css
import "./AddProduct/AddProduct.css";

const EditProducts = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [setValue, setSetValue] = useState({
    Name: "",
    AuthorName: "",
    Price: "",
    Image: "",
    Description: "",
    Status: "",
    Category: "",
  });

  const getValue = (e) => {
    setSetValue({
      ...setValue,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://192.168.1.109:5000/books/${id}`)
        .then((result) => result.json())
        .then((data) => setSetValue(data));
    };
    fetchData();
  }, [id]);

  const update = async (e) => {
    e.preventDefault();
    const { Name, AuthorName, Price, Image, Description, Status, Category } =
      setValue;

    const res = await fetch(`http://192.168.1.109:5000/addbooks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/jSON",
      },
      body: JSON.stringify({
        Name,
        AuthorName,
        Price,
        Image,
        Description,
        Status,
        Category,
      }),
    });

    const data = await res.json();
    if (res.status === 404 || !data) {
      toast("Books Not Found", {
        type: "error",
        postion: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast("Book Edit Successfully", {
        type: "success",
        postion: toast.POSITION.TOP_CENTER,
      });
      navigate("/products");
    }
  };

  return (
    <div className="addproductContainer">
      <div className="addproductheader">
        <h2>Edit-Books</h2>
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
                value={setValue.Name}
                onChange={getValue}
                label="Books-Name"
                name="Name"
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <TextField
                required
                fullWidth
                value={setValue.AuthorName}
                onChange={getValue}
                label="Author-Name"
                name="AuthorName"
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <TextField
                required
                fullWidth
                value={setValue.Price}
                onChange={getValue}
                type="number"
                label="Price"
                name="Price"
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <TextField
                fullWidth
                multiline
                value={setValue.Description}
                onChange={getValue}
                label="Description"
                name="Description"
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <TextField
                fullWidth
                value={setValue.Status}
                onChange={getValue}
                label="Status"
                name="Status"
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <TextField
                required
                fullWidth
                value={setValue.Category}
                onChange={getValue}
                label="Category"
                name="Category"
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <TextField
                fullWidth
                required
                value={setValue.Image}
                onChange={getValue}
                label="Image"
                name="Image"
              />
            </div>
            <div className="savebtn">
              <Button
                onClick={update}
                variant="contained"
                endIcon={<SaveAltIcon />}
              >
                Update
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default EditProducts;
