import React from "react";
import thanks from "../../images/illustration-thank-you.svg";
import "./ThanksContainer.css";
const ThanksContainer = ({ pointOptions, chosen }) => {
  return (
    <div className="thanks_container">
      <img src={thanks} alt="Cashier icon" />
      <p className="point_counter">
        You selected {chosen} out of {pointOptions.length}
      </p>
      <p className="title">Thank you!</p>
      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThanksContainer;
