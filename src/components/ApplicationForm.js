import { useState } from "react";
import FormContext, { initialState, sampleState } from "./FormContext";
import TheStart from "./TheStart";
import ProgressNav from "./ProgressNav";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import Survey from "./Survey";
import Summary from "./Summary";
import TheEnd from "./TheEnd";
import { expandBackground } from "../js-functions/transparent-bg";

const ApplicationForm = () => {
  const [details, setDetails] = useState(initialState);

  // const [progress, setProgress] = useState([true]);

  const step0 = (e) => {
    expandBackground();
    setDetails((prevState) => ({
      step0: {
        completed: true,
        active: false,
      },
      step1: {
        ...prevState.step1,
        active: true,
      },
      step2: { ...prevState.step2 },
      step3: { ...prevState.step3 },
      step4: { ...prevState.step4 },
      step5: { ...prevState.step5 },
    }));

    // moveForward();
  };

  const step1 = (info) => {
    const { firstName, lastName, gender, mobile, email } = info;

    setDetails((prevState) => ({
      step0: { ...prevState.step0 },
      step1: {
        ...prevState.step1,
        completed: true,
        firstName,
        lastName,
        gender,
        mobile,
        email,
        active: false,
      },
      step2: { ...prevState.step2, active: true },
      step3: { ...prevState.step3 },
      step4: { ...prevState.step4 },
      step5: { ...prevState.step5 },
    }));
  };

  const step2 = (info) => {
    const { firstLine, secondLine, city, country, postcode } = info;

    setDetails((prevState) => ({
      step0: { ...prevState.step0 },
      step1: { ...prevState.step1 },
      step2: {
        ...prevState.step2,
        completed: true,
        active: false,
        firstLine,
        secondLine,
        city,
        country,
        postcode,
      },
      step3: { ...prevState.step3, active: true },
      step4: { ...prevState.step4 },
      step5: { ...prevState.step5 },
    }));
  };

  const step3 = (info) => {
    const { hear, pet, food } = info;

    setDetails((prevState) => ({
      step0: { ...prevState.step0 },
      step1: { ...prevState.step1 },
      step2: { ...prevState.step2 },
      step3: {
        ...prevState.step3,
        completed: true,
        active: false,
        hear,
        pet,
        food,
      },
      step4: { ...prevState.step4, active: true },
      step5: { ...prevState.step5 },
    }));
  };

  const step4 = (e) => {
    expandBackground();

    setDetails(initialState);
  };

  const showStep = (e) => {
    const getStepKey = e.target.getAttribute("data-step-num");

    const stepNumber = `step${getStepKey}`;

    const getAllSteps = Object.keys(details);

    getAllSteps.forEach((step) => {
      details[step].active = false;
    });

    details[stepNumber].active = true;

    // console.log(details[stepNumber].section);
    // const show = [false, false, false, false];
    // show[getStepKey] = true;
    // setProgress(show);
    e.preventDefault();
  };

  return (
    <div className="bg-small">
      {details.step0.active && <TheStart TheStart={step0} />}
      {details.step5.active && <TheEnd />}
      <FormContext.Provider value={details}>
        <ProgressNav showStep={showStep} />
        <div className="components-container">
          {details.step1.active && <PersonalDetails setDetails={step1} />}
          {details.step2.active && <AddressDetails setAddressDetails={step2} />}
          {details.step3.active && <Survey setAboutUs={step3} />}
          {details.step4.active && <Summary endForm={step4} />}
        </div>
      </FormContext.Provider>
    </div>
  );
};

export default ApplicationForm;
