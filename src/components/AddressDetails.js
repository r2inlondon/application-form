import react, { useState } from "react";

const AddressDetails = (props) => {
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");

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
