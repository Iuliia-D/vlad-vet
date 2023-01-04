import { Link } from "react-router-dom";
import Header from "../UI/Header";
import { ReactComponent as ExpandMore } from "../../assets/icons/expand_more_white.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-black.svg";
import { ReactComponent as ArrowWhite } from "../../assets/icons/arrow-white.svg";
import { ReactComponent as Pasient } from "../../assets/icons/pasient.svg";
import { ReactComponent as PasientBlack } from "../../assets/icons/pasient-black.svg";
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
      {/* ****************** CASES *************** */}
      <div className={classes.main_cases}>
        <div className={classes.main_cases__photo}></div>
        <div className={classes.main_cases__text}>
          <Pasient />
          <p className={classes.main_cases__textSM}>Практика</p>
          <h2>Клинические случаи</h2>
          <p>
            Рассказываю о случаях и историях болезней из моей ветеринарной
            практики.
          </p>
          <p>
            Стоит подчеркнуть, что каждый случай индивидуален, течение болезни и
            методы лечения будут отличаться, даже при схожем диагнозе. Я всегда
            подхожу к диагностике и лечению пациента исходя из его особенностей
            и ориентируюсь на обстоятельства.
          </p>
          <Link to={"/cases"} className={classes.link}>
            <p>Читать подробнее</p>
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
            Научная деятельность
          </p>
          <h2>Публикации и дополнительное образование</h2>
          <p>
            Отличительная черта профессионала - это постоянное развитие своих
            навыков.{" "}
          </p>
          <p>
            Помимо практической деятельности, я уделяю время посещению
            конференций, семинаров и написанию публикаций о своей работе.
          </p>
          <Link to={"/publication"} className={classes.link}>
            <p>Читать подробнее</p>
            <Arrow />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Main;
