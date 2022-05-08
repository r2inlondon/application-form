import { useState } from "react";
import FormContext, { initialStateShort, sampleState } from "./FormContext";
import TheStart from "./TheStart";
import ProgressNav from "./ProgressNav";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import Survey from "./Survey";
import Summary from "./Summary";
import TheEnd from "./TheEnd";
import { expandBackground } from "../js-functions/transparent-bg";

const ApplicationForm = () => {
  const [details, setDetails] = useState(initialStateShort);

  const showStep = (e) => {
    const getStepKey = e.target.getAttribute("data-step-num");
    const copyDetails = { ...details };
    const getStepsKeys = Object.keys(copyDetails);

    getStepsKeys.forEach((step) => {
      copyDetails[step].active = false;
    });

    copyDetails[`step${getStepKey}`].active = true;
    setDetails(copyDetails);

    e.preventDefault();
  };

  const step0 = (e) => {
    expandBackground();
    setDetails((prevState) => ({
      ...prevState,
      step0: {
        completed: true,
        active: false,
      },
      step1: {
        ...prevState.step1,
        active: true,
        section: "Personal Details",
      },
    }));
  };

  const step1 = (info) => {
    const { firstName, lastName, gender, mobile, email } = info;

    setDetails((prevState) => ({
      ...prevState,
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
      step2: { ...prevState.step2, active: true, section: "Home Address" },
    }));
  };

  const step2 = (info) => {
    const { firstLine, secondLine, city, country, postcode } = info;

    setDetails((prevState) => ({
      ...prevState,
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
      step3: { ...prevState.step3, active: true, section: "Survey" },
    }));
  };

  const step3 = (info) => {
    const { hear, pet, food } = info;

    setDetails((prevState) => ({
      ...prevState,
      step3: {
        ...prevState.step3,
        completed: true,
        active: false,
        hear,
        pet,
        food,
      },
      step4: {
        ...prevState.step4,
        active: true,
        section: "Summary",
        completed: true,
      },
    }));
  };

  const step4 = (e) => {
    expandBackground();

    setDetails(initialStateShort);
  };

  return (
    <div className="bg-small">
      {details.step0.active && <TheStart TheStart={step0} />}
      {details.step5.active && <TheEnd />}
      <FormContext.Provider value={details}>
        <ProgressNav showStep={showStep} />
        <div className="components-container">
          {details?.step1?.active ? <PersonalDetails setDetails={step1} /> : ""}
          {details?.step2?.active ? (
            <AddressDetails setAddressDetails={step2} />
          ) : (
            ""
          )}
          {details?.step3?.active ? <Survey setAboutUs={step3} /> : ""}
          {details?.step4?.active ? <Summary endForm={step4} /> : ""}
        </div>
      </FormContext.Provider>
    </div>
  );
};

export default ApplicationForm;
