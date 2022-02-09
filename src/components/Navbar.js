import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="nav">
    <Link to="/">Home</Link>
    <Link to="personal">Personal Details</Link>
    <Link to="address">Address Details</Link>
  </div>
);

export default Navbar;
