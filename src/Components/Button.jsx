import React from "react";

import "../CSS/Button.css";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <button type={Type} onClick={onClick}>
      {Text}
    </button>
  );
};

export default Button;
