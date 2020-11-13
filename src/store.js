import { createStore, applyMiddleware, combineReducers } from "redux";

import ReduxPromise from "redux-promise";

import SigninReducer from "./pages/SignIn/SigninReducer";
import SignUpReducer from "./pages/SingUp/SignUpReducer";

const reducers = combineReducers({
  actionSignIn: SigninReducer,
  actionSignUp: SignUpReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
