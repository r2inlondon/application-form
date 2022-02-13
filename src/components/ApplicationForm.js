import React, { useState } from "react";
import FormContext from "./FormContext";
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

  const [progress, setProgress] = useState([true, false, false]);

  const step1 = (info) => {
    const { firstName, lastName } = info;

    setDetails((prevState) => ({
      step1: {
        ...prevState.step1,
        active: true,
        completed: true,
        firstName,
        lastName,
      },
      step2: { ...prevState.step2, active: true },
      step3: { ...prevState.step3 },
    }));

    setProgress([false, true, false]);
  };

  const step2 = (info) => {
    const { firstLine, secondLine, city, country, postcode } = info;

    setDetails((prevState) => ({
      step1: { ...prevState.step1 },
      step2: {
        ...prevState.step2,
        active: true,
        completed: true,
        firstLine,
        secondLine,
        city,
        country,
        postcode,
      },
      step3: { ...prevState.step3, active: true },
    }));

    setProgress([false, false, true]);
  };

  const step3 = (info) => {
    const { hear } = info;

    setDetails((prevState) => ({
      step1: { ...prevState.step1 },
      step2: { ...prevState.step2 },
      step3: {
        ...prevState.step3,
        active: true,
        completed: true,
        hear,
      },
    }));
    setProgress([false, false, false]);
  };

  const activeIt = (e) => {
    const toActive = e.target.attributes.id.value;

    const show = [false, false, false];

    show[toActive] = true;

    setProgress(show);

    e.preventDefault();

    console.log(toActive);
  };

  return (
    <div>
      <div className="nav">
        {details.step1.active && (
          <button key={1} id={0} onClick={activeIt}>
            Personal Details
          </button>
        )}
        {details.step2.active && (
          <button key={2} id={1} onClick={activeIt}>
            Home Address
          </button>
        )}
        {details.step3.active && (
          <button key={3} id={2} onClick={activeIt}>
            Step 3
          </button>
        )}
      </div>
      <h3>Application</h3>
      <FormContext.Provider value={details}>
        {progress[0] && <PersonalDetails setDetails={step1} />}
        {progress[1] && <AddressDetails setAddressDetails={step2} />}
        {progress[2] && <AboutUs setAboutUs={step3} />}
      </FormContext.Provider>
    </div>
  );
};

export default ApplicationForm;
