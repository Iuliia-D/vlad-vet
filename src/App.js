import React from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { langActions } from "./store/langSlice";

import Main from "./components/pages/Main";
import Footer from "./components/UI/Footer";

const About = React.lazy(() => import("./components/pages/About"));
const CasesList = React.lazy(() => import("./components/pages/CasesList"));
const Feedback = React.lazy(() => import("./components/pages/Feedback"));
const Contacts = React.lazy(() => import("./components/pages/Contacts"));

function App() {
  const dispatch = useDispatch();
  const langMenuActive = useSelector((state) => state.lang.langMenuActive);
  const enteredLanguage = useSelector((state) => state.lang.language);

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    dispatch(langActions.setEnteredLanguage(language));
  };

  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Main
              t={t}
              changeLanguage={changeLanguage}
              langMenuActive={langMenuActive}
              enteredLanguage={enteredLanguage}
            />
          }
        />
        <Route
          path="about"
          element={
            <About
              t={t}
              changeLanguage={changeLanguage}
              langMenuActive={langMenuActive}
              enteredLanguage={enteredLanguage}
            />
          }
        />
        <Route
          path="cases"
          element={
            <CasesList
              t={t}
              changeLanguage={changeLanguage}
              langMenuActive={langMenuActive}
              enteredLanguage={enteredLanguage}
            />
          }
        />
        <Route
          path="feedback"
          element={
            <Feedback
              t={t}
              changeLanguage={changeLanguage}
              langMenuActive={langMenuActive}
              enteredLanguage={enteredLanguage}
            />
          }
        />
        <Route
          path="contacts"
          element={
            <Contacts
              t={t}
              changeLanguage={changeLanguage}
              langMenuActive={langMenuActive}
              enteredLanguage={enteredLanguage}
            />
          }
        />
      </Routes>
      <Footer t={t} />
    </>
  );
}

export default App;
