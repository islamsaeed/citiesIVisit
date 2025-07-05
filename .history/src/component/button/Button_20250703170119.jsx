import React from "react";

function Button({ children, onClick, type }) {
  return <div onClick={onClick}>{children}</div>;
}

export default Button;
