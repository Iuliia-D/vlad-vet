import HeaderBlack from "../../UI/HeaderBlack";
import classes from "./FeedbackList.module.scss";

const FeedbackHeader = ({
  t,
  changeLanguage,
  langMenuActive,
  enteredLanguage,
}) => {
  return (
    <>
      <HeaderBlack
        t={t}
        changeLanguage={changeLanguage}
        langMenuActive={langMenuActive}
        enteredLanguage={enteredLanguage}
      />
      <div className={classes.feedback_wrapper}>
        <div className={classes.feedback_containerTitle}>
          <div className={classes.feedback_title}>
            <h2>{t("feedback.title")}</h2>
            <p className={classes.feedback_p}>{t("feedback.title2")}</p>
          </div>
          <div className={classes.feedback_photo}></div>
        </div>
      </div>
    </>
  );
};

export default FeedbackHeader;
