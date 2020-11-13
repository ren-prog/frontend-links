import { createStore, applyMiddleware, combineReducers } from "redux";

import ReduxPromise from "redux-promise";

import SigninReducer from "./pages/SignIn/SigninReducer";

const reducers = combineReducers({
  actionSignIn: SigninReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
