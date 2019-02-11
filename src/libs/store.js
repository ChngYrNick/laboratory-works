import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers from "./reducers";

const middlewares = [thunk, logger];

// eslint-disable-next-line
export const store = createStore(reducers, applyMiddleware(...middlewares));
