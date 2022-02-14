import React, { useState } from "react";
import FormContext from "./FormContext";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import AboutUs from "./AboutUs";
import Summary from "./Summary";

const ApplicationForm = () => {
  const [details, setDetails] = useState({
    step1: {
      active: true,
      completed: false
    },
    step2: {
      active: false,
      completed: false
    },
    step3: {
      active: false,
      completed: false
    },
    step4: {
      active: false,
      completed: false
    }
  });

  const [progress, setProgress] = useState([true, false, false, false]);

  const step1 = (info) => {
    const { firstName, lastName } = info;

    setDetails((prevState) => ({
      step1: {
        ...prevState.step1,
        active: true,
        completed: true,
        firstName,
        lastName
      },
      step2: { ...prevState.step2, active: true },
      step3: { ...prevState.step3 },
      step4: { ...prevState.step4 }
    }));

    setProgress([false, true, false, false]);
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
        postcode
      },
      step3: { ...prevState.step3, active: true },
      step4: { ...prevState.step4 }
    }));

    setProgress([false, false, true, false]);
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
        hear
      },
      step4: { ...prevState.step4, active: true }
    }));
    setProgress([false, false, false, true]);
  };

  const step4 = () => {};

  const activeIt = (e) => {
    const toActive = e.target.attributes.id.value;

    const show = [false, false, false, false];

    show[toActive] = true;

    setProgress(show);

    e.preventDefault();
  };

  return (
    <div>
      <div className="nav">
        {details.step1.active && (
          <button key={1} id={0} className={"step1"} onClick={activeIt}>
            Personal Details
          </button>
        )}
        {details.step2.active && (
          <button key={2} id={1} className={"step2"} onClick={activeIt}>
            Home Address
          </button>
        )}
        {details.step3.active && (
          <button key={3} id={2} className={"step3"} onClick={activeIt}>
            Step 3
          </button>
        )}
        {details.step4.active && (
          <button key={4} id={3} className={"step4"} onClick={activeIt}>
            Summary
          </button>
        )}
      </div>
      <h3>Application</h3>
      <FormContext.Provider value={details}>
        {progress[0] && <PersonalDetails setDetails={step1} />}
        {progress[1] && <AddressDetails setAddressDetails={step2} />}
        {progress[2] && <AboutUs setAboutUs={step3} />}
        {progress[3] && <Summary />}
      </FormContext.Provider>
    </div>
  );
};

export default ApplicationForm;
