import { authSliceInitialProps, GlobalUiStateProps } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const GlobalUiState: GlobalUiStateProps = {
  loading: false,
};



const uiSlice = createSlice({
  name: "uiSlice",
  initialState: GlobalUiState,
  reducers: {
    setLoading: (state, action: PayloadAction<GlobalUiStateProps>) => {
      state.loading = action.payload.loading;
    },
  },
});

export const { setLoading } = uiSlice.actions;

export default uiSlice.reducer;
