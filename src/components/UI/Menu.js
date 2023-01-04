import { useDispatch } from "react-redux";
import { menuActions } from "../../store/menuSlice";
import { headerActions } from "../../store/headerSlice";
import { Link } from "react-router-dom";
import { ReactComponent as PasientBlack } from "../../assets/icons/pasient-black.svg";
import { ReactComponent as MenuBtnClose } from "../../assets/icons/menu-btn-close.svg";
import { ReactComponent as ExpandMore } from "../../assets/icons/expand_more_black.svg";

import classes from "./Menu.module.scss";

const Menu = () => {
  const dispatch = useDispatch();
  // const hideMenu = useSelector((state) => state.menu.menuIsActive);

  const menuCloseHandler = () => {
    dispatch(menuActions.closeMenu());
  };
  const headerChangeColor = () => {
    dispatch(headerActions.changeColorToWhite());
  };
  return (
    <div className={classes.menu_wrapper}>
      <div className={classes.menu_header}>
        <div>
          <PasientBlack />
          <h1>Владислав Бочкарев</h1>
        </div>
        <button onClick={menuCloseHandler}>
          <MenuBtnClose />
        </button>
      </div>
      <ul className={classes.menu_list}>
        <li>
          <Link to={"/"} onClick={menuCloseHandler} className={classes.link}>
            <p>(0)</p>
            <p onClick={headerChangeColor}>На главную</p>
          </Link>
        </li>
        <li>
          <Link
            to={"/about"}
            onClick={menuCloseHandler}
            className={classes.link}
          >
            <p>(1)</p>
            <p>Обо мне</p>
          </Link>
        </li>
        <li>
          <Link
            to={"/cases"}
            onClick={menuCloseHandler}
            className={classes.link}
          >
            <p>(2)</p>
            <p>Клинические случаи</p>
          </Link>
        </li>
        <li>
          <Link
            to={"/publication"}
            onClick={menuCloseHandler}
            className={classes.link}
          >
            <p>(3)</p>
            <p>Публикации</p>
          </Link>
        </li>
        <li>
          <Link
            to={"/contacts"}
            onClick={menuCloseHandler}
            className={classes.link}
          >
            <p>(4)</p>
            <p>Контакты</p>
          </Link>
        </li>
      </ul>
      <div className={classes.menu_lang}>
        <p>Язык (Ru)</p>
        <ExpandMore />
      </div>
    </div>
  );
};
export default Menu;
