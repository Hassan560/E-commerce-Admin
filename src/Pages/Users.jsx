import { Divider, IconButton, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { SyncLoader } from "react-spinners";
import DeleteIcon from "@mui/icons-material/Delete";

import "./Products/Products.css";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const fetchData = async () => {
    await fetch("http://192.168.1.109:5000/users")
      .then((result) => result.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      fetchData();
    }, 1000);
  }, []);

  const deleteData = async (id) => {
    await fetch(`http://192.168.1.109:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        toast("User Deleted successfully", {
          type: "success",
          position: toast.POSITION.TOP_CENTER,
        });
        fetchData();
      });
  };

  return (
    <div className="productContainer">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: 5,
        }}
      >
        <h2>Users</h2>
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
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
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
            {users ? (
              users
                .filter((name) =>
                  name.email.toLowerCase().includes(searchInput)
                )
                .map((elem) => {
                  const { _id, userName, email } = elem;
                  return (
                    <tr key={_id}>
                      <td style={{ paddingTop: "25px" }}>{_id}</td>
                      <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                        {userName}
                      </td>
                      <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                        {email}
                      </td>
                      <td style={{ fontSize: "20px", paddingTop: "20px" }}>
                        <IconButton onClick={() => deleteData(_id)}>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </td>
                    </tr>
                  );
                })
            ) : (
              <div
                style={{ position: "absolute", top: "315px", right: "790px" }}
              >
                No users
              </div>
            )}
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default Users;
