import React, { useState, useEffect } from "react";

// import Table from "react-bootstrap/Table";
// import { Avatar, IconButton } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { SyncLoader } from "react-spinners";
// import { toast } from "react-toastify";
// import { Link } from "react-router-dom";

import MyMaterialTable from "./UI-componets/MyMaterialTable";
import { getBooks, deleteBooks,getBooksById } from "./Consts/BooksApi";
import { useContext } from "react";
import BookContext from "./Context/Book-Context";
import { useNavigate } from "react-router-dom";
import { Image } from "@mui/icons-material";

const FormName = "Books";

let booksCol = [
  {
    title: "ID",
    field: "_id",
  },
  {
    title: "Avatar",
    field: "Image",
    render: (rowData) => (
      <img
        src={rowData.Image}
        style={{ width: 50, height: 50, borderRadius: "50%" }}
        alt="Book image"
      />
    ),
  },
  {
    title: "Name",
    field: "Name",
  },
  {
    title: "AuthorName",
    field: "AuthorName",
  },
  {
    title: "Price",
    field: "Price",
  },
  {
    title: "Description",
    field: "Description",
  },
  {
    title: "Category",
    field: "Category",
  },
  {
    title: "Status",
    field: "Status",
  },
];


const ProductsTable = ({ searchInput }) => {
  const {BookValue,setBookValue} = useContext(BookContext)
  const navigate = useNavigate();

  const [books, setBooks] = useState({
    columns: booksCol,
    rows: [],
  });
  // const [loader, setLoader] = useState(false);

  const fetchData = async () => {
    const payload = {
      pageNumber: 1,
      pageSize: 5
    }
    const res = await getBooks(payload);
    setBooks((prevState) => ({
      ...prevState,
      rows: res.data,
      columns: booksCol,
    }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // delete book
  const deleteData = async (evrnt,rowData) => {
     await deleteBooks({
      _id: rowData._id  
     });
    fetchData()
  };

  // edit book 
  const editData = async (event,rowData) => {
    const result = await getBooksById({
      _id: rowData._id
    })
    setBookValue({...BookValue, ...result.data.data})
    navigate(`editproducts/${rowData._id}`)  
  }
  return (
    <MyMaterialTable
      columns={books.columns}
      data={books.rows}
      formName={FormName}
      onDelete={(event,rowData) => {
        deleteData(event,rowData)
      }}
      onEdit={(event,rowData) => {
        editData(event,rowData)
      }}
    />
  );
};

export default ProductsTable;
