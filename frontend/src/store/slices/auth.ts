import { authSliceInitialProps } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const authState: authSliceInitialProps = {
  user: {},
  accessToken: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: authState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<Omit<authSliceInitialProps, "accessToken">>
    ) => {
      state.user = action.payload.user;
    },

    setAccessToken: (
      state,
      action: PayloadAction<Omit<authSliceInitialProps, "user">>
    ) => {
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { setUser, setAccessToken } = authSlice.actions;

export default authSlice.reducer;
