import { configureStore } from "@reduxjs/toolkit";
import RootReducers from "./slices";

import {
  FLUSH,
  PERSIST,
  REHYDRATE,
  PAUSE,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";

const store = configureStore({
  reducer: RootReducers,
  devTools: process.env.NEXT_PUBLIC_NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof RootReducers>;

export const persistor = persistStore(store);
export default store;
