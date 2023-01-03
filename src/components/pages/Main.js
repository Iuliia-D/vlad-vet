import { Link } from "react-router-dom";
import Header from "../UI/Header";
import { ReactComponent as ExpandMore } from "../../assets/icons/expand_more_white.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-black.svg";
import classes from "./Main.module.scss";

const Main = () => {
  return (
    <>
      <div className={classes.main_header}>
        <Header />
        <div className={classes.main_header__lang}>
          <p>Язык (Ru)</p>
          <ExpandMore />
        </div>
      </div>
      <div className={classes.main_about}>
        <div className={classes.main_about__photo}></div>
        <div className={classes.main_about__title}>
          <h2>
            Ветеринарный врач-хирург, ортопед, травматолог, нейрохирург,
            кандидат ветеринарных наук
          </h2>
        </div>
      </div>
      <div className={classes.main__descr}>
        <p>Специализация: хирургия, травматология, ортопедия, рентген</p>
        <p>Стаж работы: с 2012 года</p>
        <Link to={"/about"} className={classes.link}>
          <p>Читать подробнее</p>
          <Arrow />
        </Link>
      </div>
    </>
  );
};
export default Main;
