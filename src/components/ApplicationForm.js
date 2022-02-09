import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";

const ApplicationForm = () => {
  const [details, setDetails] = useState({ firstName: "", lastName: "" });

  function setName(firstName, lastName) {
    console.log(firstName, lastName);

    setDetails({ firstName, lastName });

    // console.log("details state are:", details);
  }

  return (
    <div>
      <h2>Application</h2>
      <PersonalDetails data={setName} />
    </div>
  );
};

export default ApplicationForm;
