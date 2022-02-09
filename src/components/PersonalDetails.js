import React, { useState } from "react";

const PersonalDetails = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
        <label>lastName Name</label>
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
