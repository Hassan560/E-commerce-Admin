import React, { createContext,useState } from "react";

export const AuthContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState({
        name: "",
        category: "",
        price: "",
        description: "",
        image: "",
      });
    
      // const [data,setData] = useState([])

      return(
    <AuthContext.Provider value={{
        products,
        setProducts,
        // data,
        // setData
    }}>
        {children}
        </AuthContext.Provider>
  )
};

export default ProductsProvider;
