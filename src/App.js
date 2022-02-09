import React from "react";
import ApplicationForm from "./components/ApplicationForm";
import PersonalDetails from "./components/PersonalDetails";
import AddressDetails from "./components/AddressDetails";

import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
  Router
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ApplicationForm />} />
        <Route path="/personal" element={<PersonalDetails />} />
        <Route path="/address" element={<AddressDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
