import React from "react";
import "./SubmitBtn.css";

const SubmitBtn = ({ submitForm }) => {
  return (
    <button onClick={(e) => submitForm(e)} className="submit">
      SUBMIT
    </button>
  );
};

export default SubmitBtn;
