import React from "react";

import "../App.css";

const Card = ({ name, price, className }) => {
  return (
    <div className={className}>
      <div>
        <h2>{name}</h2>
        <p style={{ marginTop: "10px" }}>Rs {price}</p>
      </div>
    </div>
  );
};

export default Card;
