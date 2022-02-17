import React, { useContext } from "react";
import FormContext from "./FormContext";

const ProgressNav = ({ activeIt }) => {
  const details = useContext(FormContext);

  return (
    <div className="progress-nav">
      <div className="steps">
        {details.step1.active && (
          <button key={1} id={1} className="step1" onClick={activeIt}>
            {/* {details.step1.section} */}
          </button>
        )}
      </div>
      {details.step2.active && (
        <button key={2} id={2} className="step2" onClick={activeIt}>
          {details.step2.section}
        </button>
      )}
      {details.step3.active && (
        <button key={3} id={3} className="step3" onClick={activeIt}>
          {details.step3.section}
        </button>
      )}
      {details.step4.active && (
        <button key={4} id={4} className="step4" onClick={activeIt}>
          {details.step4.section}
        </button>
      )}
    </div>
  );
};

export default ProgressNav;
