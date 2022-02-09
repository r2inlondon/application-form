import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";

const ApplicationForm = () => {
  const [details, setDetails] = useState({ firstName: "", lastName: "" });

  function setName(firstName) {
    console.log(firstName);

    setDetails({ firstName: firstName });

    console.log("details state is:", details);
  }

  return (
    <div>
      <h2>Application</h2>
      <PersonalDetails data={setName} />
    </div>
  );
};

export default ApplicationForm;
