import React, { useState, useContext } from "react";
import FormContext from "./FormContext";

const AboutUs = (props) => {
  const details = useContext(FormContext);
  const [hear, setHear] = useState(
    details.step3.hear ? details.step3.hear : "Gumtree"
  );
  const [pet, setPet] = useState(
    details.step3.pet ? details.step3.pet : "Dog person"
  );

  const [food, setFood] = useState(
    details.step3.food ? details.step3.food : "No"
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
          <option value="Linkedin">Linkedin</option>
          <option value="Gumtree">Gumtree</option>
          <option value="Newspaper">Newspaper</option>
        </select>
        <br />
        <label>Would you say that you are a: </label>
        <br />
        <select id="pet" value={pet} onChange={(e) => setPet(e.target.value)}>
          <option value="Dog person">Dog Person</option>
          <option value="Cat person">Cat Person</option>
        </select>
        <br />
        <label>Are you a vegetarian ? </label>
        <br />
        <select
          id="food"
          value={food}
          onChange={(e) => setFood(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default AboutUs;
