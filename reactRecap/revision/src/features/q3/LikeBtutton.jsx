import React, { useReducer, useState } from "react";
import { initialState, reducer } from "./reducer/likeReducer";
import { fakeApi } from "./utils/fakeApi";

const LikeBtutton = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = async () => {
    if (state.status === "loading") return;

    let intent = state.status === "liked" ? "unlike" : "like";
    dispatch({ type: "CLICKED" });
    try {
      await fakeApi();
      dispatch({ type: "SUCCESS", payload: intent });
    } catch (err) {
      dispatch({ type: "FAILURE", payload: err });
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={state.status === "loading"}>
        {state.status}
      </button>
      {state.error}
    </div>
  );
};

export default LikeBtutton;
