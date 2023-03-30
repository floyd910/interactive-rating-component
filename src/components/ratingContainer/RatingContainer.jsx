import { React, useState } from "react";
import RatingForm from "../ratingForm/RatingForm";
import ThanksContainer from "../thanksContainer/ThanksContainer";
import "./RatingContainer.css";

const RatingContainer = () => {
  const pointOptions = [1, 2, 3, 4, 5];
  const [chosen, setChosen] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const submitForm = (e) => {
    e.preventDefault();
    chosen && setFormSubmitted(true);
  };
  const chooseRating = (e, rating) => {
    e.preventDefault();
    setChosen(rating);
  };
  return (
    <div className="rating_container">
      {formSubmitted ? (
        <ThanksContainer chosen={chosen} pointOptions={pointOptions} />
      ) : (
        <RatingForm
          pointOptions={pointOptions}
          chosen={chosen}
          chooseRating={chooseRating}
          submitForm={submitForm}
        />
      )}
    </div>
  );
};

export default RatingContainer;
