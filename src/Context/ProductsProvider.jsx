import React, { createContext,useState } from "react";

export const AuthContext = createContext();

const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState({
        name: "",
        category: "",
        price: "",
        description: "",
        rating: "",
        imageUrl: "",
      });

      return(
    <AuthContext.Provider value={{
        products,
        setProducts,
    }}>
        {children}
        </AuthContext.Provider>
  )
};

export default ProductsProvider;
