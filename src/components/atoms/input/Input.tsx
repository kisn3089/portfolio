import React from "react";
import { StyleInput } from "./InputStyles";

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <StyleInput {...props} />;
};

export default Input;
