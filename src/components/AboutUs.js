import React, { useState } from "react";

const AboutUs = (props) => {
  const [hear, setHear] = useState("");

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
