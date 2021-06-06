import { combineReducers } from "redux";

import { authReducer } from "./auth-reducer";

// right now we have only 1 reducer, but lets use this format of combineReducers so you can add more later if you need to.
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
