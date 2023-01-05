import { createSlice } from "@reduxjs/toolkit";
// import { useTranslation } from "react-i18next";

// const { t, i18n } = useTranslation();

// const changeLanguage = (language) => {
//   i18n.changeLanguage(language);
// };

const initialState = {
  language: "ru",
  langMenuActive: false,
  // enteredLanguage: "",
};

const langSlice = createSlice({
  name: "lang",
  initialState: initialState,
  // languages: ["ru", "en", "sr"],
  reducers: {
    langMenuActive(state) {
      state.langMenuActive = true;
    },
    langMenuClose(state) {
      state.langMenuActive = false;
    },
    setEnteredLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const langActions = langSlice.actions;
export default langSlice.reducer;
