import React, { useContext } from "react";
import FormContext from "./FormContext";

const Summary = (props) => {
  const details = useContext(FormContext);

  // const personalDetails = [];

  // for (let key in details.step1) {
  //   if (details.step1.hasOwnProperty(key)) {
  //     if (!key === "completed") {
  //       personalDetails.push(
  //         <div>
  //           <p>{key}: </p>
  //           <p>{details.step1[key]}</p>
  //         </div>
  //       );
  //     }
  //   }
  // }

  // console.log(personalDetails);

  return (
    <div className="summary">
      <h3>{details.step1.section}</h3>
      <p>First name:</p>
      <p>{details.step1.firstName}</p>
      <p>Last name:</p>
      <p>{details.step1.lastName}</p>
      <p> {details.step2.section}</p>
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
      <button onClick={props.endForm}>Submit Form</button>
    </div>
  );
};

export default Summary;
