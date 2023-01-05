import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { langActions } from "../../store/langSlice";
import Header from "../UI/Header";
import LanguageChoise from "../UI/LanguageChoise";
import { ReactComponent as ExpandMore } from "../../assets/icons/expand_more_white.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-black.svg";
import { ReactComponent as ArrowWhite } from "../../assets/icons/arrow-white.svg";
import { ReactComponent as Pasient } from "../../assets/icons/pasient.svg";
import { ReactComponent as PasientBlack } from "../../assets/icons/pasient-black.svg";
import classes from "./Main.module.scss";

const Main = ({ t, changeLanguage, langMenuActive, enteredLanguage }) => {
  const dispatch = useDispatch();

  const langMenuActiveHandler = () => {
    dispatch(langActions.langMenuActive());
  };

  return (
    <>
      <div className={classes.main_header}>
        <Header
          t={t}
          changeLanguage={changeLanguage}
          enteredLanguage={enteredLanguage}
          langMenuActive={langMenuActive}
        />
        {!langMenuActive && (
          <div className={classes.main_header__lang}>
            <button onClick={langMenuActiveHandler}>
              {t("lang")} ({enteredLanguage})
            </button>
            <ExpandMore />
          </div>
        )}
        {langMenuActive && <LanguageChoise changeLanguage={changeLanguage} />}
      </div>
      <div className={classes.main_about}>
        <div className={classes.main_about__photo}></div>
        <div className={classes.main_about__title}>
          <h2>{t("mainTitle")}</h2>
        </div>
      </div>
      <div className={classes.main__descr}>
        <p>{t("mainDescription.part1")}</p>
        <p>{t("mainDescription.part2")}</p>
        <Link to={"/about"} className={classes.link}>
          <p>{t("mainDescription.readMore")}</p>
          <Arrow />
        </Link>
      </div>
      {/* ****************** CASES *************** */}
      <div className={classes.main_cases}>
        <div className={classes.main_cases__photo}></div>
        <div className={classes.main_cases__text}>
          <Pasient />
          <p className={classes.main_cases__textSM}>{t("mainPreTitle2")}</p>
          <h2>{t("mainTitle2")}</h2>
          <p>{t("mainDescription2.part1")}</p>
          <p>{t("mainDescription2.part2")}</p>
          <Link to={"/cases"} className={classes.link}>
            <p>{t("mainDescription2.readMore")}</p>
            <ArrowWhite />
          </Link>
        </div>
      </div>
      {/* ****************** PABLICATION *************** */}
      <div className={classes.main_publication}>
        <div className={classes.main_publication__photo}></div>
        <div className={classes.main_publication__text}>
          <PasientBlack />
          <p className={classes.main_publication__textSM}>
            {t("mainPreTitle3")}
          </p>
          <h2>{t("mainTitle3")}</h2>
          <p>{t("mainDescription3.part1")}</p>
          <p>{t("mainDescription3.part2")}</p>
          <Link to={"/publication"} className={classes.link}>
            <p>{t("mainDescription3.readMore")}</p>
            <Arrow />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Main;
