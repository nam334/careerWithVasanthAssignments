import React, { useReducer } from "react";
import Step1 from "./components/Step1";
import { initialState, reducer } from "./reducer/formReducer";

const Multistepform = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Step1 state={state} dispatch={dispatch} />
    </>
  );
};

export default Multistepform;
