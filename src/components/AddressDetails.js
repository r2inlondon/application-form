import react, { useState, useContext } from "react";
import FormContext from "./FormContext";

const AddressDetails = (props) => {
  const details = useContext(FormContext);
  const [firstLine, setFirstLine] = useState(
    details.step2.firstLine ? details.step2.firstLine : ""
  );
  const [secondLine, setSecondLine] = useState(
    details.step2.secondLine ? details.step2.secondLine : ""
  );
  const [city, setCity] = useState(
    details.step2.city ? details.step2.city : ""
  );
  const [country, setCountry] = useState(
    details.step2.country ? details.step2.country : ""
  );
  const [postcode, setPostcode] = useState(
    details.step2.postcode ? details.step2.postcode : ""
  );

  const onSubmit = (e) => {
    e.preventDefault();

    props.setAddressDetails({
      firstLine,
      secondLine,
      city,
      country,
      postcode
    });
  };

  return (
    <div className="address-form">
      <h3>Personal address</h3>
      <form onSubmit={onSubmit}>
        <label>Address first line</label>
        <br />
        <input
          type="text"
          id="firstLine"
          name="firstLine"
          value={firstLine}
          onChange={(e) => setFirstLine(e.target.value)}
          ype="text"
        />
        <br />
        <label>Address second line</label>
        <br />
        <input
          type="text"
          id="secondLine"
          name="secondLine"
          value={secondLine}
          onChange={(e) => setSecondLine(e.target.value)}
          ype="text"
        />
        <br />
        <label>City</label>
        <br />
        <input
          type="text"
          id=" city"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          ype="text"
        />
        <br />
        <label>Postcode</label>
        <br />
        <input
          type="text"
          id=" postcode"
          name="postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          ype="text"
        />
        <br />
        <label>Country</label>
        <br />
        <input
          type="text"
          id=" country"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          ype="text"
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddressDetails;
