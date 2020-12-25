import logger from "redux-logger";

import options from "./optionsReducer";
import toDoList from "./toDoListReducer";

import { applyMiddleware, combineReducers, createStore } from "redux";

let middleware = {};

if (process.env.NODE_ENV !== "production") {
  middleware = applyMiddleware(logger);
}

const reducers = combineReducers({ toDoList, options });

export const store = createStore(reducers, middleware);
