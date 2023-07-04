import { configureStore } from "@reduxjs/toolkit";
import RootReducers from "./slices";
export default configureStore({
  reducer: RootReducers,
});

export type RootState = ReturnType<typeof RootReducers>;
