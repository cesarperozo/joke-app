import React from "react";
import { Container } from "./styles";

const SouvenirColor = ({ children, color }) => {
  return <Container color={color}>{children}</Container>;
};

export default SouvenirColor;
