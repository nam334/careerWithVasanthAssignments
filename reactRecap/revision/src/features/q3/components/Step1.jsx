const Step1 = ({ state, dispatch }) => {
  return (
    <div>
      <h2>Step 1</h2>

      <div>
        <label>Name</label>
        <div>
          <input
            type="text"
            placeholder="Enter fullname"
            value={state.data.fullName}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                payload: {
                  field: "fullName",
                  value: e.target.value,
                },
              })
            }
          />
        </div>
        <div>
          {state.errors.fullName ? <div>{state.errors.fullName}</div> : null}
        </div>
      </div>
    </div>
  );
};

export default Step1;
