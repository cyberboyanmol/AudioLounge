import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import verifyReducer from "./verify";
import accessTokenReducer from "./accessToken";
import uiReducer from "./uiSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};
export default combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  verify: verifyReducer,
  ui: uiReducer,
  accessToken: accessTokenReducer,
});
