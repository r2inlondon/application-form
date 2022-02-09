import React, { useState } from "react";

const PersonalDetails = (props) => {
  const [fName, setfName] = useState("");

  const getFirstName = (e) => {
    e.preventDefault();
    setfName(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.data(fName);
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
          onChange={getFirstName}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PersonalDetails;
