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
      <div className="personal-details">
        <h2>{details.step1.section}</h2>
        <p>First name:</p>
        <p>{details.step1.firstName}</p>
        <p>Last name:</p>
        <p>{details.step1.lastName}</p>
        <p>Gender:</p>
        <p>{details.step1.gender}</p>
        <p>Mobile:</p>
        <p>{details.step1.mobile}</p>
        <p>Email:</p>
        <p>{details.step1.email}</p>
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
