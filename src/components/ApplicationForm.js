import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";

const ApplicationForm = () => {
  const [details, setDetails] = useState("");
  const [addressDetails, setAddressDetails] = useState("");

  // function setName(firstName, lastName) {
  //   setDetails({ firstName, lastName });
  // }

  return (
    <div>
      <h2>Application</h2>
      <PersonalDetails setDetails={setDetails} />
      <AddressDetails setAddressDetails={setAddressDetails} />
    </div>
  );
};

export default ApplicationForm;
