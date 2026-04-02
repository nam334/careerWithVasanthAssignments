//a reducer is  afunction that takes in current state and action and returns a new state

export const initialState = {
  data: {
    fullName: "",
    email: "",
    address: "",
  },
  currentStep: 1,
  errors: {},
  isSubmitted: false,
};

export function reducer(currentState, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...currentState,
        data: {
          ...currentState.data,
          [action.payload.field]: action.payload.value,
        },
      };
    case "PREV_STEP":
      return {
        ...currentState,
        currentStep: currentState.currentStep - 1,
      };
    case "NEXT_STEP":
      return {
        ...currentState,
        currentStep: currentState.currentStep + 1,
        errors: {},
      };
    case "SET_ERRORS":
      return {
        ...currentState,
        errors: action.payload,
      };
    case "SUBMIT":
      return {
        ...currentState,
        isSubmitted: true,
      };
    default:
      return currentState;
  }
}
