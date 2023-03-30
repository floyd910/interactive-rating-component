import React from "react";
import "./PointItem.css";

const PointItem = ({ item, chosen, chooseRating }) => {
  return (
    <button
      onClick={(e) => chooseRating(e, item)}
      className={
        chosen && chosen === item ? "point_item point_active" : "point_item"
      }
    >
      {item}
    </button>
  );
};

export default PointItem;
