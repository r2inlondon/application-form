import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import AboutUs from "./AboutUs";

const ApplicationForm = () => {
  const [details, setDetails] = useState({ opened: true });
  const [addressDetails, setAddressDetails] = useState({ opened: false });
  const [about, setAbout] = useState({ opened: false });
  const [progress, setProgress] = useState([]);

  const step1 = (info) => {
    const { firstName, lastName } = info;
    setDetails({ firstName, lastName, opened: false });
    progress.push("Step 1");
    console.log(progress);
    setAddressDetails({ opened: true });
  };

  const step2 = (info) => {
    const { firstLine, secondLine, city, country, postcode } = info;

    setAddressDetails({
      firstLine,
      secondLine,
      city,
      country,
      postcode,
      opened: false
    });
    progress.push("Step 2");
    console.log(progress);
    setAbout({ opened: true });
  };

  console.log(progress);

  return (
    <div>
      <div className="nav">
        {progress.map((item, index) => {
          return <button key={index}>{item}</button>;
        })}
      </div>
      <h3>Application</h3>
      {details.opened && <PersonalDetails setDetails={step1} />}
      {addressDetails.opened && <AddressDetails setAddressDetails={step2} />}
      {about.opened && <AboutUs />}
    </div>
  );
};

export default ApplicationForm;
