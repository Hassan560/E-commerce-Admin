import { useState, createContext } from "react";

const BookContext = createContext({
    BookValue: {},
    setBookValue: () => {}
});

export const BookContextProvider = (props) => {
  const [BookValue, setBookValue] = useState({
    Name: "",
    AuthorName: "",
    Price: "",
    Image: "",
    Description: "",
    Status: "",
    Category: "",
  });
  return (
    <BookContext.Provider
      value={{
        BookValue,
        setBookValue,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContext;
