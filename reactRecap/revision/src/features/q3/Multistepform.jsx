import React, { useReducer } from "react";
import Step1 from "./components/Step1";
import { initialState, reducer } from "./reducer/formReducer";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

const Multistepform = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNext = () => {
    let errors = {};
    if (state.currentStep === 1) {
      if (state.data.fullName == "" || state.data.fullName.length < 3)
        errors.fullName = "Full name should be less than 3 characters";
    }
    if (state.currentStep === 2) {
      if (state.data.email === "" || state.data.email.length < 3)
        errors.email = "Email should be less than 3 characters";
    }

    if (state.currentStep === 3) {
      if (state.data.address === "" || state.data.address.length < 3)
        errors.address = "Address should be less than 3 characters";
    }

    if (Object.keys(errors)?.length > 0)
      dispatch({
        type: "SET_ERRORS",
        payload: errors,
      });
    else {
      dispatch({ type: "NEXT_STEP" });
    }
  };

  const nextHandler = () => {
    handleNext();
  };

  const prevHandler = () => dispatch({ type: "PREV_STEP" });
  return (
    <>
      <div>
        {state.currentStep === 1 ? (
          <>
            <Step1 state={state} dispatch={dispatch} />
            <button onClick={nextHandler}>Next</button>
          </>
        ) : state.currentStep === 2 ? (
          <div>
            <Step2 state={state} dispatch={dispatch} />
            <button onClick={prevHandler}>Previous</button>
            <button onClick={nextHandler}>Next</button>
          </div>
        ) : state.currentStep === 3 ? (
          <div>
            <Step3 state={state} dispatch={dispatch} />
            <button onClick={prevHandler}>Previous</button>
            <button onClick={() => dispatch({ type: "SUBMIT" })}>Submit</button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Multistepform;
