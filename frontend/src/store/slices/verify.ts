import { verifySliceInitialProps } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialStateVerify: verifySliceInitialProps = {
  email: "",
  hash: "",
};
const verifySlice = createSlice({
  name: "verifySlice",
  initialState: initialStateVerify,
  reducers: {
    setVerify: (state, action: PayloadAction<verifySliceInitialProps>) => {
      state.email = action.payload.email;
      state.hash = action.payload.hash;
    },
  },
});

export const { setVerify } = verifySlice.actions;
export default verifySlice.reducer;
