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
      postcode,
    });
  };

  return (
    <div className="address-form">
      <form onSubmit={onSubmit}>
        <label>Address first line</label>
        <br />
        <input
          type="text"
          id="firstLine"
          name="firstLine"
          minLength={4}
          required
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
        <div className="inputs-container">
          <div className="two-inputs">
            <label>City</label>
            <br />
            <input
              type="text"
              id=" city"
              minLength={4}
              required
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              ype="text"
            />
            <br />
          </div>
          <div className="two-inputs">
            <label>Postcode</label>
            <br />
            <input
              type="text"
              id=" postcode"
              minLength={4}
              required
              name="postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              ype="text"
            />
          </div>
        </div>
        <br />
        <label>Country</label>
        <br />
        <input
          type="text"
          id=" country"
          minLength={4}
          required
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          ype="text"
        />
        <br />

        <div className="next">
          <input className="the-button" type="submit" value="NEXT" />
        </div>
      </form>
    </div>
  );
};

export default AddressDetails;
