import React from "react";

import { IButton } from "./Button.type";
import "./button.css";

export const Button = ({ children, onClick, disabled, type }: IButton) => {
  return (
    <button
      className="button"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};
