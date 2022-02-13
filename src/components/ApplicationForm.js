import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import AboutUs from "./AboutUs";

const ApplicationForm = () => {
  const [details, setDetails] = useState({
    step1: {
      active: true,
      completed: false,
    },
    step2: {
      active: false,
      completed: false,
    },
    step3: {
      active: false,
      completed: false,
    },
  });

  // const [addressDetails, setAddressDetails] = useState({ opened: false });
  // const [about, setAbout] = useState({ opened: false });
  const [progress, setProgress] = useState([]);

  const step1 = (info) => {
    const { firstName, lastName } = info;

    setDetails((prevState) => ({
      step1: {
        ...prevState.step1,
        active: false,
        completed: true,
        firstName,
        lastName,
      },
      step2: { ...prevState.step2, active: true },
      step3: { ...prevState.step3 },
    }));
  };

  const step2 = (info) => {
    const { firstLine, secondLine, city, country, postcode } = info;

    setDetails((prevState) => ({
      step1: { ...prevState.step1 },
      step2: {
        ...prevState.step2,
        active: false,
        completed: true,
        firstLine,
        secondLine,
        city,
        country,
        postcode,
      },
      step3: { ...prevState.step3, active: true },
    }));
  };

  const step3 = (info) => {
    const { hear } = info;

    setDetails((prevState) => ({
      step1: { ...prevState.step1 },
      step2: { ...prevState.step2 },
      step3: {
        ...prevState.step3,
        active: false,
        completed: true,
        hear,
      },
    }));
  };

  console.log(progress);

  return (
    <div>
      <div className="nav">
        {details.step1.completed && <button key={1}>Personal Details</button>}
        {details.step2.completed && <button key={2}>Home Address</button>}
        {details.step3.completed && <button key={3}>Step 3</button>}
      </div>
      <h3>Application</h3>
      {details.step1.active && <PersonalDetails setDetails={step1} />}
      {details.step2.active && <AddressDetails setAddressDetails={step2} />}
      {details.step3.active && <AboutUs setAboutUs={step3} />}
    </div>
  );
};

export default ApplicationForm;
