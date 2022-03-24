import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './Context/ProductsProvider';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4D4867'
    },
    secondary: {
      main: '#FD694C',
      light: '#FFDB8D'
    },
  },
});

ReactDOM.render(
  <ProductsProvider>
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>,
  </ProductsProvider>,
  document.getElementById('root')
);

