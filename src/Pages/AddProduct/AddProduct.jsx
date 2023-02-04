import React, { useState, useContext } from "react";

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

import { toast } from "react-toastify";
import InputText from "../../components/UI/InputText";
import BookContext from "../../components/Context/Book-Context";

// addproduct css
import "./AddProduct.css";

const AddProduct = () => {
  const navigate = useNavigate();
  const { BookValue, setBookValue } = useContext(BookContext);

  const submit = async (e) => {
    e.preventDefault();
    const { Name, AuthorName, Price, Image, Description, Status, Category } =
      BookValue;

    const res = await fetch("http://192.168.1.109:5000/addbooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/",
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
    await res.json();
    if ((Name, AuthorName, Price, Image, Description, Status, Category)) {
      toast("Books Add Successfully", {
        type: "success",
        postion: toast.POSITION.TOP_CENTER,
      });

      navigate("/products");
    } else {
      toast("Please Fill the Field", {
        type: "error",
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="addproductContainer">
      <div className="addproductheader">
        <h2>ADD-BOOKS</h2>
        <div>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
        </div>
      </div>
      <Divider />
      <div className="form">
        <Container maxWidth="sm">
          <form autoComplete="Off" method="POST">
            <div style={{ marginTop: "10px" }}>
              <InputText
                type="text"
                label="Book's Name"
                onChange={(e) =>
                  setBookValue({
                    ...BookValue,
                    Name: e.target.value,
                  })
                }
                value={BookValue.Name}
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <InputText
                type="text"
                label="Author-Name"
                onChange={(e) =>
                  setBookValue({
                    ...BookValue,
                    AuthorName: e.target.value,
                  })
                }
                value={BookValue.AuthorName}
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <InputText
                type="number"
                label="Price"
                onChange={(e) =>
                  setBookValue({
                    ...BookValue,
                    Price: e.target.value,
                  })
                }
                value={BookValue.Price}
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <InputText
                type="text"
                label="Description"
                onChange={(e) =>
                  setBookValue({
                    ...BookValue,
                    Description: e.target.value,
                  })
                }
                value={BookValue.Description}
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <InputText
                type="text"
                label="Category"
                onChange={(e) =>
                  setBookValue({
                    ...BookValue,
                    Category: e.target.value,
                  })
                }
                value={BookValue.Category}
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <InputText
                type="number"
                label="Status"
                onChange={(e) =>
                  setBookValue({
                    ...BookValue,
                    Status: e.target.value,
                  })
                }
                value={BookValue.Status}
              />
            </div>
            <div style={{ marginTop: "30px" }}>
              <InputText
                type="text"
                label="Book-Image"
                onChange={(e) =>
                  setBookValue({
                    ...BookValue,
                    Image: e.target.value,
                  })
                }
                value={BookValue.Image}
              />
            </div>
            <div className="savebtn">
              <Button
                onClick={submit}
                variant="contained"
                endIcon={<SaveAltIcon />}
              >
                Save
              </Button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default AddProduct;
