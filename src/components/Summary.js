import React, { useContext } from "react";
import FormContext from "./FormContext";

const Summary = () => {
  const details = useContext(FormContext);

  return (
    <div className="summary">
      <p>First name:</p> <p>{details.step1.firstName}</p>
      <p>Last name:</p> <p>{details.step1.lastName}</p>
    </div>
  );
};

export default Summary;
