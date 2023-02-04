import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BookContextProvider } from "./components/Context/Book-Context";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4D4867",
    },
    secondary: {
      main: "#FD694C",
      light: "#FFDB8D",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <BookContextProvider>
          <App />
        </BookContextProvider>
        <ToastContainer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
