import { React, useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import HeaderBlack from "../UI/HeaderBlack";
import Case from "./Case";
import Slider from "../UI/slider/Slider";
import classes from "./Cases.module.scss";

const CasesList = ({ t, changeLanguage, langMenuActive, enteredLanguage }) => {
  const [cases, setCases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, "cases"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let casesArray = [];
      querySnapshot.forEach((doc) => {
        casesArray.push({ ...doc.data(), id: doc.id });
      });
      setCases(casesArray);
      setIsLoading(false);
    });
    return () => unsub();
  }, []);

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
      <ul>
        {cases
          // .sort((a, b) => (a.date < b.date ? -1 : 1))
          .map((c) => {
            return <Case key={c.id} c={c} />;
          })}
      </ul>
      {/* <div className={classes.cases_wrapper}>
        <h2>Клинические случаи</h2>
        <h3>Первичное новообразование головного мозга у собаки</h3>
        <Slider />
        <p>
          Первичное новообразование головного мозга у собаки — проблема
          встречающаяся по разным источникам в 1,5-3% от всех новообразований.
          <br />
          Частым клиническим проявлением новообразования является наличие
          приступов. <br />
          Для лечения новообразования задействуется множество ветеринарных
          специалистов.
        </p>
        <p>
          10 летняя собака Боня поступила на приём, после того как приступы
          повторились с короткими интервалами 5 раз. <br />
          Команда ОРИТ ветеринарного центра приняла все необходимые усилия для
          стабилизации общего состояния. <br />
        </p>
        <p>
          После стабилизации были назначены антиконвульсанты и рекомендовано
          проведение МРТ головного мозга. <br />
          По результатам МРТ было выявлено Новообразование в области затылочной
          доли коры больших полушарий и мозжечка с правой стороны. <br />
          Хозяевам было рекомендовано оперативное лечение, после которого Боня
          стабилизировалась командой отделения ОРИТ.
          <br /> Во время операции осуществлялась навигация с помощью врачей
          отделения визуальной диагностики.
          <br /> Результатом гистологического исследования являлась
          олигодендроглиома — первичное новообразование головного мозга,
          основным лечением которой является хирургическое вмешательство. <br />
        </p>
        <p>Контрольное МРТ головного мозга роста новообразований не выявило.</p>
      </div> */}
    </>
  );
};

export default CasesList;
