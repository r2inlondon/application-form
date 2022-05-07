import { useContext } from "react";
import FormContext from "./FormContext";

const ProgressNav = ({ showStep }) => {
  const details = useContext(FormContext);

  return (
    <div>
      {details.step0.completed && (
        <div className="nav">
          <div className="progress">
            <div className="steps">
              {details.step1.active && (
                <button
                  key={1}
                  data-step-num={1}
                  className="button-step"
                  onClick={showStep}
                ></button>
              )}
            </div>
            <div className="line"></div>
            <div className="steps">
              {details.step2.active && (
                <button
                  key={2}
                  data-step-num={2}
                  className="button-step"
                  onClick={showStep}
                ></button>
              )}
            </div>
            <div className="line"></div>
            <div className="steps">
              {details.step3.active && (
                <button
                  key={3}
                  data-step-num={3}
                  className="button-step"
                  onClick={showStep}
                ></button>
              )}
            </div>
            <div className="line"></div>
            <div className="steps">
              {details.step4.active && (
                <button
                  key={4}
                  data-step-num={4}
                  className="button-step"
                  onClick={showStep}
                ></button>
              )}
            </div>
          </div>
          <div className="progress-txt-container">
            <div className="progress-txt">
              <p>{details.step1.section}</p>
            </div>
            <div className="progress-txt">
              <p>{details.step2.section}</p>
            </div>
            <div className="progress-txt">
              <p>{details.step3.section}</p>
            </div>
            <div className="progress-txt">
              <p>{details.step4.section}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressNav;
