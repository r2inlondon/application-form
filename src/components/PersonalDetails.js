import React, { useState } from "react";

const PersonalDetails = (props) => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.data(fName, lName);
  };

  return (
    <div className="personal-d">
      <form onSubmit={onSubmit}>
        <label>First Name</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={fName}
          onChange={(e) => setfName(e.target.value)}
        />
        <br />
        <label>lastName Name</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={lName}
          onChange={(e) => setlName(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PersonalDetails;
