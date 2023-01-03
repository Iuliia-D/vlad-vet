import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuIsActive: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    openMenu(state) {
      state.menuIsActive = true;
    },
    closeMenu(state) {
      state.menuIsActive = false;
    },
  },
});

export const menuActions = menuSlice.actions;
export default menuSlice.reducer;
