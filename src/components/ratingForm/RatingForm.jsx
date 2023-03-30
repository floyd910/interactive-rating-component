import React from "react";
import Points from "../points/Points";
import Star from "../star/Star";
import SubmitBtn from "../submitBtn/SubmitBtn";
import "./RatingForm.css";

const RatingForm = ({ pointOptions, chosen, chooseRating, submitForm }) => {
  return (
    <form className="rating_form">
      <Star />
      <label className="title">How did we do?</label>
      <p className="text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Points
        pointOptions={pointOptions}
        chosen={chosen}
        chooseRating={chooseRating}
      />
      <SubmitBtn submitForm={submitForm} />
    </form>
  );
};

export default RatingForm;
