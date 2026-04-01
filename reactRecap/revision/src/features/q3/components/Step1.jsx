import React from "react";

const Step1 = ({state, dispatch}) => {
  return (
    <div>
      <h2>Step 1</h2>

      <div>
        <label>Name</label>
        <input type="text" placeholder="Enter fullname" onChange={e => dispatch({'UPDATE_FIELD',e.target.value})} />
      </div>

      <button>Next</button>
    </div>
  );
};

export default Step1;
