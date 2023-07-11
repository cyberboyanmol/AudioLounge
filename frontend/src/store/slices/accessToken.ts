import { accessTokenProps } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const accessToken: accessTokenProps = {
  accessToken: "",
};

const accessTokenSlice = createSlice({
  name: "accessTokenSlice",
  initialState: accessToken,
  reducers: {
    setAccessToken: (state, action: PayloadAction<accessTokenProps>) => {
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { setAccessToken } = accessTokenSlice.actions;

export default accessTokenSlice.reducer;
