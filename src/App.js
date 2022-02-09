import React from "react";
import ApplicationForm from "./components/ApplicationForm";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
