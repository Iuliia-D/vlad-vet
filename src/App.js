import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { langActions } from "./store/langSlice";

import Main from "./components/pages/Main";
import About from "./components/pages/About";
import Cases from "./components/pages/Cases";
import Publication from "./components/pages/Publication";
import Contacts from "./components/pages/Contacts";
import Footer from "./components/UI/Footer";

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
            <Cases
              t={t}
              changeLanguage={changeLanguage}
              langMenuActive={langMenuActive}
              enteredLanguage={enteredLanguage}
            />
          }
        />
        <Route
          path="publication"
          element={
            <Publication
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
