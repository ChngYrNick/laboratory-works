export const SET_EVENT = "SET_EVENT";

export const setEvent = event => {
  return dispatch =>
    dispatch({
      type: SET_EVENT,
      payload: event
    });
};
