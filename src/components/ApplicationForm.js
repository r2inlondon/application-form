import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";

const ApplicationForm = () => {
  const [details, setDetails] = useState({});

  // function setName(firstName, lastName) {
  //   setDetails({ firstName, lastName });
  // }

  return (
    <div>
      <h2>Application</h2>
      <PersonalDetails setDetails={setDetails} />
    </div>
  );
};

export default ApplicationForm;
