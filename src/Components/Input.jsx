import React from "react";

import "../CSS/Input.css";

const Input = ({ type, value, onChange }) => {
  return <input type={type} value={value} onChange={onChange} />;
};

export default Input;
