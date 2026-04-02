import React from "react";

const Step3 = ({ state, dispatch }) => {
  return (
    <div>
      <div>
        <h2>Step 3</h2>

        <div>
          <label>Address</label>
          <div>
            <input
              type="text"
              placeholder="Enter address"
              value={state.data.address}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  payload: {
                    field: "address",
                    value: e.target.value,
                  },
                })
              }
            />
          </div>
          <div>{state.errors.address && <div>{state.errors.address}</div>}</div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
