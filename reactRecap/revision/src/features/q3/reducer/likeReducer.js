export const initialState = {
  status: "default",
  error: "",
};

//reducer - function that updates a state based on the action type
export const reducer = (currentState, action) => {
  switch (action.type) {
    case "CLICKED": {
      return {
        ...currentState,
        status: "loading",
        error: "",
      };
    }
    case "SUCCESS": {
      return {
        ...currentState,
        status: action.payload === "like" ? "liked" : "default",
        error: "",
      };
    }
    case "FAILURE": {
      return {
        ...currentState,
        status: "default",
        error: action.payload,
      };
    }
    default:
      return currentState;
  }
};
