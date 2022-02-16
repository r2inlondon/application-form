import React, { useState } from "react";
import FormContext, { initialState } from "./FormContext";
import TheStart from "./TheStart";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import AboutUs from "./AboutUs";
import Summary from "./Summary";
import TheEnd from "./TheEnd";
import { expandBackground } from "../js-functions/transparent-bg";

const ApplicationForm = () => {
  const [details, setDetails] = useState(initialState);

  const [progress, setProgress] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  const step0 = (e) => {
    expandBackground();
    setDetails((prevState) => ({
      step1: {
        ...prevState.step1,
        active: true,
      },
      step2: { ...prevState.step2 },
      step3: { ...prevState.step3 },
      step4: { ...prevState.step4 },
    }));

    setProgress([false, true, false, false, false, false]);
  };

  const step1 = (info) => {
    const { firstName, lastName, gender, mobile, email } = info;

    setDetails((prevState) => ({
      step1: {
        ...prevState.step1,
        completed: true,
        firstName,
        lastName,
        gender,
        mobile,
        email,
      },
      step2: { ...prevState.step2, active: true },
      step3: { ...prevState.step3 },
      step4: { ...prevState.step4 },
    }));

    setProgress([false, false, true, false, false, false]);
  };

  const step2 = (info) => {
    const { firstLine, secondLine, city, country, postcode } = info;

    setDetails((prevState) => ({
      step1: { ...prevState.step1 },
      step2: {
        ...prevState.step2,
        completed: true,
        firstLine,
        secondLine,
        city,
        country,
        postcode,
      },
      step3: { ...prevState.step3, active: true },
      step4: { ...prevState.step4 },
    }));

    setProgress([false, false, false, true, false, false]);
  };

  const step3 = (info) => {
    const { hear, pet, food } = info;

    setDetails((prevState) => ({
      step1: { ...prevState.step1 },
      step2: { ...prevState.step2 },
      step3: {
        ...prevState.step3,
        completed: true,
        hear,
        pet,
        food,
      },
      step4: { ...prevState.step4, active: true },
    }));
    setProgress([false, false, false, false, true, false]);
  };

  const step4 = (e) => {
    setProgress([false, false, false, false, false, true]);
    setDetails(initialState);
  };

  const activeIt = (e) => {
    const toActive = e.target.attributes.id.value;

    const show = [false, false, false, false];

    show[toActive] = true;

    setProgress(show);

    e.preventDefault();
  };

  return (
    <div className="bg-small">
      <div className="nav">
        {details.step1.active && (
          <button key={1} id={1} className={"step1"} onClick={activeIt}>
            {details.step1.section}
          </button>
        )}
        {details.step2.active && (
          <button key={2} id={2} className={"step2"} onClick={activeIt}>
            {details.step2.section}
          </button>
        )}
        {details.step3.active && (
          <button key={3} id={3} className={"step3"} onClick={activeIt}>
            {details.step3.section}
          </button>
        )}
        {details.step4.active && (
          <button key={4} id={4} className={"step4"} onClick={activeIt}>
            {details.step4.section}
          </button>
        )}
      </div>

      <div className="components-container">
        {progress[0] && <TheStart TheStart={step0} />}
        <FormContext.Provider value={details}>
          {progress[1] && <PersonalDetails setDetails={step1} />}
          {progress[2] && <AddressDetails setAddressDetails={step2} />}
          {progress[3] && <AboutUs setAboutUs={step3} />}
          {progress[4] && <Summary endForm={step4} />}
        </FormContext.Provider>
        {progress[5] && <TheEnd />}
      </div>
    </div>
  );
};

export default ApplicationForm;
