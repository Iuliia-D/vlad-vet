import { useDispatch } from "react-redux";
import { menuActions } from "../../store/menuSlice";
import { langActions } from "../../store/langSlice";
import { Link } from "react-router-dom";
import { ReactComponent as PasientBlack } from "../../assets/icons/pasient-black.svg";
import { ReactComponent as MenuBtnClose } from "../../assets/icons/menu-btn-close.svg";
import { ReactComponent as ExpandMore } from "../../assets/icons/expand_more_black.svg";
import LanguageChoise from "./LanguageChoise";

import classes from "./Menu.module.scss";

const Menu = ({ t, changeLanguage, enteredLanguage, langMenuActive }) => {
  const dispatch = useDispatch();

  const menuCloseHandler = () => {
    dispatch(menuActions.closeMenu());
  };
  const langMenuActiveHandler = () => {
    dispatch(langActions.langMenuActive());
  };
  const langMenuCloseHandler = () => {
    dispatch(langActions.langMenuClose());
  };

  return (
    <>
      <div className={classes.menu_wrapper}>
        <div className={classes.menu_header}>
          <div>
            <PasientBlack />
            <h1>{t("name")}</h1>
          </div>
          <button
            onClick={() => {
              menuCloseHandler();
              langMenuCloseHandler();
            }}
          >
            <MenuBtnClose />
          </button>
        </div>
        <ul className={classes.menu_list}>
          <li>
            <Link to={"/"} onClick={menuCloseHandler} className={classes.link}>
              <span>(0)</span>
              <p>{t("menu.main")}</p>
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              onClick={menuCloseHandler}
              className={classes.link}
            >
              <span>(1)</span>
              <p>{t("menu.about")}</p>
            </Link>
          </li>
          <li>
            <Link
              to={"/cases"}
              onClick={menuCloseHandler}
              className={classes.link}
            >
              <span>(2)</span>
              <p>{t("menu.cases")}</p>
            </Link>
          </li>
          {/* <li>
            <Link
              to={"/feedback"}
              onClick={menuCloseHandler}
              className={classes.link}
            >
              <span>(3)</span>
              <p>{t("menu.feedback")}</p>
            </Link>
          </li> */}
          <li>
            <Link
              to={"/contacts"}
              onClick={menuCloseHandler}
              className={classes.link}
            >
              <span>(3)</span>
              <p>{t("menu.contacts")}</p>
            </Link>
          </li>
        </ul>
        <div className={classes.menu_langContainer}>
          {!langMenuActive && (
            <div className={classes.menu_lang}>
              <button onClick={langMenuActiveHandler}>
                {t("lang")} ({enteredLanguage})
              </button>
              <ExpandMore />
            </div>
          )}
          {langMenuActive && <LanguageChoise changeLanguage={changeLanguage} />}
        </div>
      </div>
    </>
  );
};
export default Menu;
