// import { useState } from "react";
import { menuActions } from "../../store/menuSlice";
import { headerActions } from "../../store/headerSlice";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Pasient } from "../../assets/icons/pasient.svg";
import { ReactComponent as PasientBlack } from "../../assets/icons/pasient-black.svg";
import { ReactComponent as MenuBtn } from "../../assets/icons/menu-btn.svg";
import { ReactComponent as MenuBtnBlack } from "../../assets/icons/menu-btn-black.svg";

import Menu from "./Menu";
import classes from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.menu.menuIsActive);
  const headerColorWhite = useSelector((state) => state.header.colorWhite);

  const menuOpenHandler = () => {
    dispatch(menuActions.openMenu());
    dispatch(headerActions.changeColorToBlack());
  };
  return (
    <>
      {showMenu && <Menu />}

      <div className={classes.header_menu}>
        <div>
          {headerColorWhite ? <Pasient /> : <PasientBlack />}
          <h1
            className={
              headerColorWhite
                ? `${classes.white_text}`
                : `${classes.black_text}`
            }
          >
            Владислав Бочкарев
          </h1>
        </div>
        <button onClick={menuOpenHandler}>
          {headerColorWhite ? <MenuBtn /> : <MenuBtnBlack />}
        </button>
      </div>
    </>
  );
};
export default Header;
