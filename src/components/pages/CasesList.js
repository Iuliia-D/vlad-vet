import { React, useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import HeaderBlack from "../UI/HeaderBlack";
import Case from "./Case";
import classes from "./CasesList.module.scss";

const CasesList = ({ t, changeLanguage, langMenuActive, enteredLanguage }) => {
  const [cases, setCases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let q;
    if (enteredLanguage === "ru") {
      q = query(collection(db, "cases"));
    } else if (enteredLanguage === "en") {
      q = query(collection(db, "casesEN"));
    } else {
      q = query(collection(db, "casesSR"));
    }

    // const q = query(
    //   collection(db, `${enteredLanguage === "ru" ? "cases" : "casesEN"}`)
    // );
    const unsub = onSnapshot(q, (querySnapshot) => {
      let casesArray = [];
      querySnapshot.forEach((doc) => {
        casesArray.push({ ...doc.data(), id: doc.id });
      });
      setCases(casesArray);
      setIsLoading(false);
    });
    return () => unsub();
  }, [enteredLanguage]);

  console.log(cases);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  if (cases.length === 0) {
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
      <div className={classes.cases_wrapper}>
        <h2>Клинические случаи</h2>
        <ul>
          {cases
            .sort((a, b) => (a.date < b.date ? -1 : 1))
            .map((c) => {
              return <Case key={c.id} c={c} t={t} />;
            })}
        </ul>
      </div>
    </>
  );
};

export default CasesList;
