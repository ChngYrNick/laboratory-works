import { SET_EVENT } from "../actions";

const initialState = {
  event: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENT:
      return { event: action.payload };

    default:
      return state;
  }
};
