import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";

const ApplicationForm = () => {
  const [details, setDetails] = useState({ active: true });
  const [addressDetails, setAddressDetails] = useState("");

  console.log(details);

  return (
    <div>
      <div className="nav"></div>
      <h3>Application</h3>
      {details.active && <PersonalDetails setDetails={setDetails} />}
      {!details.active && (
        <AddressDetails setAddressDetails={setAddressDetails} />
      )}
    </div>
  );
};

export default ApplicationForm;
