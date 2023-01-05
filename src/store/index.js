import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import langReducer from "./langSlice";

export default configureStore({
  reducer: {
    menu: menuReducer,
    lang: langReducer,
  },
});
