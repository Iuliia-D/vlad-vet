import { React, useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import HeaderBlack from "../UI/HeaderBlack";
import Feedback from "./Feedback";
import LoadingPage from "./LoadingPage";
import classes from "./FeedbackList.module.scss";

const FeedbackList = ({
  t,
  changeLanguage,
  langMenuActive,
  enteredLanguage,
}) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let q;
    if (enteredLanguage === "ru") {
      q = query(collection(db, "feedback"));
    } else if (enteredLanguage === "en") {
      q = query(collection(db, "feedbackEN"));
    } else {
      q = query(collection(db, "feedbackSR"));
    }

    const unsub = onSnapshot(q, (querySnapshot) => {
      let feedbackArray = [];
      querySnapshot.forEach((doc) => {
        feedbackArray.push({ ...doc.data(), id: doc.id });
      });
      setFeedback(feedbackArray);
      setIsLoading(false);
    });
    return () => unsub();
  }, [enteredLanguage]);

  if (isLoading) {
    return (
      <section>
        <p>
          <LoadingPage />
        </p>
      </section>
    );
  }
  if (feedback.length === 0) {
    return <h2>Нет записей</h2>;
  }

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
      <div className={classes.feedback_containerFeedback}>
        <ul>
          {feedback
            .sort((a, b) => (a.date < b.date ? -1 : 1))
            .map((f) => {
              return <Feedback key={f.id} f={f} t={t} />;
            })}
        </ul>
      </div>
    </>
  );
};

export default FeedbackList;
