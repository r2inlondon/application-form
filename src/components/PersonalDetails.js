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

  const [gender, setGender] = useState(
    details.step1.gender ? details.step1.gender : ""
  );

  const [mobile, setMobile] = useState(
    details.step1.mobile ? details.step1.mobile : ""
  );

  const [email, setEmail] = useState(
    details.step1.email ? details.step1.email : ""
  );

  const onSubmit = (e) => {
    e.preventDefault();
    props.setDetails({ firstName, lastName, gender, mobile, email });
  };

  return (
    <div className="personal-d">
      <form onSubmit={onSubmit}>
        <label>First Name</label>
        <br />
        <input
          type="text"
          required
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
          required
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <p>Gender</p>
        <label>
          <input
            type="radio"
            checked={gender === "male"}
            onChange={(e) => setGender("male")}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            checked={gender === "female"}
            onChange={(e) => setGender("female")}
          />
          Female
        </label>
        <br />
        <label>Mobile</label>
        <br />
        <input
          type="txt"
          required
          min="10"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          required
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PersonalDetails;
