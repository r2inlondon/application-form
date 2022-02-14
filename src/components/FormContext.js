import { createContext } from "react";

const FormContext = createContext();

export const initialState = {
  step1: {
    section: "Personal Details",
    active: false,
    completed: false,
  },
  step2: {
    section: "Address Details",
    active: false,
    completed: false,
  },
  step3: {
    section: "Survey",
    active: false,
    completed: false,
  },
  step4: {
    section: "Summary",
    active: false,
    completed: false,
  },
};

export default FormContext;
