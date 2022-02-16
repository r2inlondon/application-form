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

export const sampleState = {
  step1: {
    active: true,
    completed: true,
    email: "r2inlondon@gmail.com",

    firstName: "Arturo",
    gender: "male",

    lastName: "Quiroz",
    mobile: "asfsdaf",
    section: "Personal Details",
  },
  step2: {
    active: true,
    city: "London",
    completed: true,
    country: "UK",
    firstLine: "12341234",
    postcode: "se173hb",
    secondLine: "12341234",
    section: "Address Details",
  },
  step3: {
    completed: true,
    food: "No",
    hear: "Gumtree",
    pet: "Dog person",
    section: "Survey",
  },
  step4: {
    section: "Summary",
    active: false,
    completed: false,
  },
};

export default FormContext;
