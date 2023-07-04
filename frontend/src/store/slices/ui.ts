import { initialStateUIProps } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialStateUI: initialStateUIProps = {
  state: false,
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState: initialStateUI,
  reducers: {
    setState: (state, action: PayloadAction<boolean>) => {
      state.state = action.payload;
    },
  },
});

export const { setState } = uiSlice.actions;

export default uiSlice.reducer;
