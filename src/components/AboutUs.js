import React, { useState, useContext } from "react";
import FormContext from "./FormContext";

const AboutUs = (props) => {
  const details = useContext(FormContext);
  const [hear, setHear] = useState(
    details.step3.hear ? details.step3.hear : ""
  );

  const onSubmit = (e) => {
    e.preventDefault();
    props.setAboutUs({ hear });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>How did you hear about us?</label>
        <br />
        <input
          type="text"
          id="hear"
          name="hear"
          value={hear}
          onChange={(e) => setHear(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default AboutUs;
