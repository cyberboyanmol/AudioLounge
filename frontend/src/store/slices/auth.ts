import { authSliceInitialProps } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authState: authSliceInitialProps = {
  user: {},
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: authState,
  reducers: {
    setUser: (state, action: PayloadAction<authSliceInitialProps>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
