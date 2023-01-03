// import { useState } from "react";
import { menuActions } from "../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Pasient } from "../../assets/icons/pasient.svg";
import { ReactComponent as MenuBtn } from "../../assets/icons/menu-btn.svg";

import Menu from "./Menu";

import classes from "./Header.module.scss";

const Header = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.menu.menuIsActive);
  // const [menuActive, setMenuActive] = useState(false);
  const menuOpenHandler = () => {
    dispatch(menuActions.openMenu());
  };
  return (
    <>
      {showMenu && <Menu />}

      <div className={classes.header_menu}>
        <div>
          <Pasient />
          <h1>Владислав Бочкарев</h1>
        </div>
        <button onClick={menuOpenHandler}>
          <MenuBtn />
        </button>
      </div>
    </>
  );
};
export default Header;
