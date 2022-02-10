import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import AboutUs from "./AboutUs";

const ApplicationForm = () => {
  const [details, setDetails] = useState("");
  const [addressDetails, setAddressDetails] = useState("");
  const [about, setAbout] = useState("");

  const [token, setToke] = useState([
    ["PersonalDetails", true],
    ["AddressDetails", false],
    ["AboutUs", false],
  ]);

  return (
    <div>
      <div className="nav"></div>
      <h3>Application</h3>
      <PersonalDetails setDetails={setDetails} />
      <AddressDetails setAddressDetails={setAddressDetails} />
      <AboutUs />
    </div>
  );
};

export default ApplicationForm;
