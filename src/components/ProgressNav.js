import React, { useContext } from "react";
import FormContext from "./FormContext";

const ProgressNav = (props) => {
  const details = useContext(FormContext);

  return (
    <div className="nav">
      {details.step1.active && (
        <button key={1} id={1} className={"step1"} onClick={props.activeIt}>
          {details.step1.section}
        </button>
      )}
      {details.step2.active && (
        <button key={2} id={2} className={"step2"} onClick={props.activeIt}>
          {details.step2.section}
        </button>
      )}
      {details.step3.active && (
        <button key={3} id={3} className={"step3"} onClick={props.activeIt}>
          {details.step3.section}
        </button>
      )}
      {details.step4.active && (
        <button key={4} id={4} className={"step4"} onClick={props.activeIt}>
          {details.step4.section}
        </button>
      )}
    </div>
  );
};

export default ProgressNav;
