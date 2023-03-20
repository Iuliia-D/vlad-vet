import { menuActions } from "../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as PasientBlack } from "../../assets/icons/pasient-black.svg";
import { ReactComponent as MenuBtnBlack } from "../../assets/icons/menu-btn-black.svg";

import Menu from "./Menu";
import classes from "./HeaderBlack.module.scss";

const HeaderBlack = ({
  t,
  changeLanguage,
  enteredLanguage,
  langMenuActive,
}) => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.menu.menuIsActive);

  const menuOpenHandler = () => {
    dispatch(menuActions.openMenu());
  };
  return (
    <>
      {showMenu && (
        <Menu
          t={t}
          changeLanguage={changeLanguage}
          enteredLanguage={enteredLanguage}
          langMenuActive={langMenuActive}
        />
      )}

      <div className={classes.header_menu}>
        <Link to={"/"} className={classes.header_menuLink}>
          <div>
            <PasientBlack />
            <h1>{t("name")}</h1>
          </div>
        </Link>
        <button onClick={menuOpenHandler}>
          <MenuBtnBlack />
        </button>
      </div>
    </>
  );
};
export default HeaderBlack;
