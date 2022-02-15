import React, { useContext } from "react";
import FormContext from "./FormContext";

const Summary = (props) => {
  const details = useContext(FormContext);

  return (
    <div className="summary">
      <div className="personal-details">
        <h2>{details.step1.section}</h2>
        <p>First name:</p>
        <p>{details.step1.firstName}</p>
        <p>Last name:</p>
        <p>{details.step1.lastName}</p>
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
        <p>Country:</p> <p>{details.step2.country}</p>
      </div>
      <button onClick={props.endForm}>Submit Form</button>
    </div>
  );
};

export default Summary;
