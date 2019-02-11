import { combineReducers } from "redux";

import pageReducers from "./page";

export default combineReducers({
  page: pageReducers
});
