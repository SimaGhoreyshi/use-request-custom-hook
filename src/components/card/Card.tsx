import { ICard } from "./Card.types";
import "./card.css";

import React from "react";

export const Card = ({ title, image }: ICard) => {
  return (
    <div className="card-container">
      <img className="card-image" src={image} alt="item-image" />
      <p className="card-title">{title}</p>
    </div>
  );
};
