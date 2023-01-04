import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import headerReducer from "./headerSlice";

export default configureStore({
  reducer: {
    menu: menuReducer,
    header: headerReducer,
  },
});
