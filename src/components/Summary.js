import React, { useContext } from "react";
import FormContext from "./FormContext";

const Summary = (props) => {
  const details = useContext(FormContext);

  return (
    <div className="summary">
      <p>
        Click on the progress bar above if you need to go back to any of the
        sections to amend your info
      </p>
      <p className="summary-title">{details.step1.section}</p>
      <div className="black-line"></div>
      <div className="personal-details">
        <div className="inputs-container">
          <div className="two-inputs">
            <p className="field-title">First name:</p>
            <p>{details.step1.firstName}</p>
          </div>
          <div className="two-inputs">
            <p className="field-title">Last name:</p>
            <p>{details.step1.lastName}</p>
          </div>
        </div>
        <div className="inputs-container">
          <div className="two-inputs">
            <p className="field-title">Gender:</p>
            <p>{details.step1.gender}</p>
          </div>
          <div className="two-inputs">
            <p className="field-title">Mobile:</p>
            <p>{details.step1.mobile}</p>
          </div>
        </div>
        <div className="inputs-container">
          <p className="field-title">Email:</p>
          <p>{details.step1.email}</p>
        </div>
      </div>

      <div className="address">
        <h2> {details.step2.section}</h2>
        <p>Address first line</p>
        <p>{details.step2.firstLine}</p>
        {details.step2.firstLine && (
          <div>
            <p>Address second line</p>
            <p>{details.step2.firstLine}</p>
          </div>
        )}
        <p>City:</p> <p>{details.step2.city}</p>
        <p>PostCode:</p> <p>{details.step2.postcode}</p>
        <p>Country:</p> <p>{details.step2.country}</p>
      </div>
      <div className="survey">
        <p>Where did you hear about us?</p>
        <p>{details.step3.hear}</p>
        <p>Would you say that you are: </p>
        <p>{details.step3.pet}</p>
        <p>Are you vegetarian? </p>
        <p>{details.step3.food}</p>
      </div>
      <button onClick={props.endForm}>Submit Form</button>
    </div>
  );
};

export default Summary;
