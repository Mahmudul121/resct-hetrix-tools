import React from "react";
import { Button as BTN } from "react-bootstrap";

const Button = ({ name, ...props }) => {
  return <BTN {...props}>{name}</BTN>;
};

export default Button;
