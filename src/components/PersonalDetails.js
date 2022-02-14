import React, { useState, useContext } from "react";
import FormContext from "./FormContext";

const PersonalDetails = (props) => {
  const details = useContext(FormContext);

  const [firstName, setFirstName] = useState(
    details.step1.firstName ? details.step1.firstName : ""
  );
  const [lastName, setLastName] = useState(
    details.step1.lastName ? details.step1.lastName : ""
  );

  const onSubmit = (e) => {
    e.preventDefault();
    props.setDetails({ firstName, lastName });
  };

  return (
    <div className="personal-d">
      <form onSubmit={onSubmit}>
        <label>First Name</label>
        <br />
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label>last Name</label>
        <br />
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PersonalDetails;
