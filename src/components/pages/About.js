import HeaderBlack from "../UI/HeaderBlack";
import classes from "./About.module.scss";

const About = ({ t, changeLanguage, langMenuActive, enteredLanguage }) => {
  return (
    <div>
      <HeaderBlack
        t={t}
        changeLanguage={changeLanguage}
        enteredLanguage={enteredLanguage}
        langMenuActive={langMenuActive}
      />
      <div className={classes.about}>
        <div className={classes.about__photo}></div>
        <div className={classes.about__title}>
          <h2>{t("mainTitle")}</h2>
        </div>
      </div>
      <div className={classes.about__descr}>
        <p>{t("mainDescription.part1")}</p>
        <p>{t("mainDescription.part2")}</p>
      </div>
      <div className={classes.about_detail}>
        <div className={classes.about_detail__img}></div>
        <h2>{t("aboutTitle")}</h2>
        <ul>
          <li>
            <h3>{t("aboutDescription.title")}</h3>
            <p>{t("aboutDescription.part1")}</p>
          </li>
          <li>
            <h3>{t("aboutDescription.title2")}</h3>
            <p>{t("aboutDescription.part2")}</p>
          </li>
        </ul>

        <h2>{t("aboutTitle2")}</h2>
        <ul>
          <li>
            <h3>{t("aboutDescription2.title4")}</h3>
            <p>{t("aboutDescription2.part4")}</p>
          </li>
          <li>
            <h3>{t("aboutDescription2.title3")}</h3>
            <p>{t("aboutDescription2.part3")}</p>
          </li>
          <li>
            <h3>{t("aboutDescription2.title2")}</h3>
            <p>{t("aboutDescription2.part2")}</p>
          </li>
          <li>
            <h3>{t("aboutDescription2.title")}</h3>
            <p>{t("aboutDescription2.part1")}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default About;
