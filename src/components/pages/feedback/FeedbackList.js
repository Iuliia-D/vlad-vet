import { React, useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";

import Feedback from "./Feedback";
import LoadingPage from "./../LoadingPage";
import classes from "./FeedbackList.module.scss";
import FeedbackHeader from "./FeedbackHeader";

const FeedbackList = ({
  t,
  changeLanguage,
  langMenuActive,
  enteredLanguage,
}) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Получаем отзывы из БД. В зависимости от выбранного языка,
  // обращаемся к соотвественной коллекции в БД.
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

  // Проверяем, что есть доступ к БД и массив с отзывыми приходит.
  // Иначе показываем сообщение.
  if (feedback.length === 0) {
    return (
      <>
        <FeedbackHeader
          t={t}
          changeLanguage={changeLanguage}
          langMenuActive={langMenuActive}
          enteredLanguage={enteredLanguage}
        />
        <h2 style={{ textAlign: "center", marginTop: "60px" }}>
          {t("feedback.errorMassege")}
        </h2>
        <Link to={"/contacts"}>
          <p
            style={{ textAlign: "center", marginTop: "30px", fontSize: "24px" }}
          >
            {t("mainWritwToMe")}
          </p>
        </Link>
      </>
    );
  }

  // Если все ОК, показываем отзывы, сортируем по дате.
  return (
    <>
      <FeedbackHeader
        t={t}
        changeLanguage={changeLanguage}
        langMenuActive={langMenuActive}
        enteredLanguage={enteredLanguage}
      />
      <div className={classes.feedback_containerFeedback}>
        <ul>
          {feedback
            .sort((a, b) => (a.date < b.date ? -1 : 1))
            .map((f) => {
              return <Feedback key={f.id} f={f} t={t} />;
            })}
        </ul>
      </div>
      <Link to={"/contacts"}>
        <p style={{ textAlign: "center", marginTop: "30px", fontSize: "24px" }}>
          {t("mainWritwToMe")}
        </p>
      </Link>
    </>
  );
};

export default FeedbackList;
