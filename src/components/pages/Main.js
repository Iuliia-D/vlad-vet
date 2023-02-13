import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { langActions } from "../../store/langSlice";
import Header from "../UI/Header";
import LanguageChoise from "../UI/LanguageChoise";
import { ReactComponent as ExpandMore } from "../../assets/icons/expand_more_white.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-black.svg";
import { ReactComponent as ArrowWhite } from "../../assets/icons/arrow-white.svg";
// import { ReactComponent as Pasient } from "../../assets/icons/pasient.svg";
// import { ReactComponent as PasientBlack } from "../../assets/icons/pasient-black.svg";
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
          <div className={classes.main__descrDesktop}>
            <p>{t("mainDescription.part1")}</p>
            <p>{t("mainDescription.part2")}</p>
            <p>{t("mainDescription.part3")}</p>
            <Link to={"/about"} className={classes.link}>
              <p>{t("mainDescription.readMore")}</p>
              <Arrow />
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.main__descrMobile}>
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
          {/* <Pasient /> */}
          <p>01</p>
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
      {/* ****************** FEEDBACK *************** */}
      <div className={classes.main_feedback}>
        <div className={classes.main_feedback__photo}>
          <p>02</p>
          <Link to={"/contacts"} className={classes.link_contacts}>
            <p>{t("mainWritwToMe")}</p>
          </Link>
          <p className={classes.main_feedback__preTitle}>
            {t("mainPreTitle3")}
          </p>
          <h2>{t("mainTitle3")}</h2>
        </div>
        <div className={classes.main_feedback__text}>
          {/* <PasientBlack /> */}

          <p className={classes.main_feedback__name}>Петр Иванов</p>
          <p>
            Оторвали Мишке лапу, уронили Мишку на пол. Пришлось везти Мишку в
            клинику. Там наш доктор ай-Владислав пришил Мишке лапку, да так, что
            у Мишки улучшилась мелкая моторика, теперь не просто медведь, а еще
            и помощник по хозяйству! Мы даже не жалеем, что лапу оторвали, в
            будущем планируем повторить с остальными тремя.
          </p>
          <Link to={"/feedback"} className={classes.link}>
            <p>{t("mainDescription3.readMore")}</p>
            <Arrow />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Main;
