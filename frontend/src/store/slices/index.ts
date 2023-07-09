import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import verifyReducer from "./verify";
export default combineReducers({
  auth: authReducer,
  verify: verifyReducer,
});
