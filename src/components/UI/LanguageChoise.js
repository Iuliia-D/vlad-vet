import { useDispatch, useSelector } from "react-redux";
import { langActions } from "../../store/langSlice";
import { ReactComponent as ExpandMore } from "../../assets/icons/expand_more_white.svg";
import classes from "./LanguageChoise.module.scss";

const LanguageChoise = ({ changeLanguage }) => {
  const languages = ["ru", "en", "sr"];

  const dispatch = useDispatch();
  const langMenuCloseHandler = () => {
    dispatch(langActions.langMenuClose());
  };

  const enteredLanguage = useSelector((state) => state.lang.language);

  return (
    <>
      <div className={classes.lang_wrapper}>
        <button
          onClick={() => {
            changeLanguage(languages[0]);
            langMenuCloseHandler();
          }}
        >
          <p>Русский ({languages[0]})</p>
          {enteredLanguage === languages[0] ? <ExpandMore /> : ""}
        </button>
        <button
          onClick={() => {
            changeLanguage(languages[1]);
            langMenuCloseHandler();
          }}
        >
          <p>English ({languages[1]})</p>
          {enteredLanguage === languages[1] ? <ExpandMore /> : ""}
        </button>
        {/* <button
          onClick={() => {
            changeLanguage(languages[2]);
            langMenuCloseHandler();
          }}
        >
          <p>Српски ({languages[2]})</p>
          {enteredLanguage === languages[2] ? <ExpandMore /> : ""}
        </button> */}
      </div>
    </>
  );
};
export default LanguageChoise;
