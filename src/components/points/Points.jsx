import React from "react";
import PointItem from "../pointItem/PointItem";
import "./Points.css";

const Points = ({ pointOptions, chosen, chooseRating }) => {
  return (
    <div className="points">
      {pointOptions.map((item) => {
        return (
          <PointItem
            key={item}
            item={item}
            chosen={chosen}
            chooseRating={chooseRating}
          />
        );
      })}
    </div>
  );
};

export default Points;
