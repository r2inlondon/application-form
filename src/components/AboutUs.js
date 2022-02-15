import React, { useState, useContext } from "react";
import FormContext from "./FormContext";

const AboutUs = (props) => {
  const details = useContext(FormContext);
  const [hear, setHear] = useState(
    details.step3.hear ? details.step3.hear : "Gumtree"
  );
  const [pet, setPet] = useState(
    details.step3.pet ? details.step3.pet : "dog person"
  );

  const [food, setFood] = useState(
    details.step3.food ? details.step3.food : "Vegetables"
  );

  const onSubmit = (e) => {
    e.preventDefault();
    props.setAboutUs({ hear, pet, food });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>How did you hear about us?</label>
        <br />
        <select
          id="hear"
          value={hear}
          onChange={(e) => setHear(e.target.value)}
        >
          <option value="linkedin">Linkedin</option>
          <option value="gumtree">Gumtree</option>
          <option value="newspaper">Newspaper</option>
        </select>
        <br />
        <label>Would you say that you are a: </label>
        <br />
        <select id="pet" value={pet} onChange={(e) => setPet(e.target.value)}>
          <option value="dog person">Dog Person</option>
          <option value="cat person">Cat Person</option>
        </select>
        <br />
        <label>Are you a vegetarian ? </label>
        <br />
        <select
          id="food"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default AboutUs;
