import { menuActions } from "../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Pasient } from "../../assets/icons/pasient.svg";
import { ReactComponent as MenuBtn } from "../../assets/icons/menu-btn.svg";

import Menu from "./Menu";
import classes from "./Header.module.scss";

const Header = ({ t, changeLanguage, enteredLanguage, langMenuActive }) => {
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
        <div>
          <Pasient />
          <h1>{t("name")}</h1>
        </div>
        <button onClick={menuOpenHandler}>
          <MenuBtn />
        </button>
      </div>
    </>
  );
};
export default Header;
