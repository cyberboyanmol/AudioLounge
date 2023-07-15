import { authSliceInitialProps, provider } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const authState: authSliceInitialProps = {
  user: {},
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: authState,
  reducers: {
    setUser: (state, action: PayloadAction<authSliceInitialProps>) => {
      state.user = action.payload.user;
    },
    resetUser: (state) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      state.user = {};
    });
  },
});

export const { setUser, resetUser } = authSlice.actions;

export default authSlice.reducer;
