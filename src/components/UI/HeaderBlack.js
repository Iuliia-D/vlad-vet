import { menuActions } from "../../store/menuSlice";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as PasientBlack } from "../../assets/icons/pasient-black.svg";
import { ReactComponent as MenuBtnBlack } from "../../assets/icons/menu-btn-black.svg";

import Menu from "./Menu";
import classes from "./HeaderBlack.module.scss";

const HeaderBlack = () => {
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.menu.menuIsActive);

  const menuOpenHandler = () => {
    dispatch(menuActions.openMenu());
  };
  return (
    <>
      {showMenu && <Menu />}

      <div className={classes.header_menu}>
        <div>
          <PasientBlack />
          <h1>Владислав Бочкарев</h1>
        </div>
        <button onClick={menuOpenHandler}>
          <MenuBtnBlack />
        </button>
      </div>
    </>
  );
};
export default HeaderBlack;
