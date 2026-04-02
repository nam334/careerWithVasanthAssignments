import React from "react";

const Step2 = ({ state, dispatch }) => {
  return (
    <div>
      <div>
        <h2>Step 2</h2>

        <div>
          <label>Email</label>
          <div>
            <input
              type="email"
              placeholder="Enter email"
              value={state.data.email}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  payload: {
                    field: "email",
                    value: e.target.value,
                  },
                })
              }
            />
          </div>
          <div>{state.errors.email && <div>{state.errors.email}</div>}</div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
