import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorWhite: true,
};

const headerSlice = createSlice({
  name: "header",
  initialState: initialState,
  reducers: {
    changeColorToBlack(state) {
      state.colorWhite = false;
    },
    changeColorToWhite(state) {
      state.colorWhite = true;
    },
  },
});

export const headerActions = headerSlice.actions;
export default headerSlice.reducer;
