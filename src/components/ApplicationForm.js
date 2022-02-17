import React, { useState } from "react";
import FormContext, { initialState, sampleState } from "./FormContext";
import TheStart from "./TheStart";
import ProgressNav from "./ProgressNav";
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
      {progress[0] && <TheStart TheStart={step0} />}
      <FormContext.Provider value={details}>
        <ProgressNav activeIt={activeIt} />
        <div className="components-container">
          {progress[1] && <PersonalDetails setDetails={step1} />}
          {progress[2] && <AddressDetails setAddressDetails={step2} />}
          {progress[3] && <AboutUs setAboutUs={step3} />}
          {progress[4] && <Summary endForm={step4} />}
        </div>
      </FormContext.Provider>
      {progress[5] && <TheEnd />}
    </div>
  );
};

export default ApplicationForm;
