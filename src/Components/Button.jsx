import React from "react";

import "../CSS/Button.css";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <button type="button" onClick={onClick}>
      {Text}
    </button>
  );
};

export default Button;
