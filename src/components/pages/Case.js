import { useState } from "react";
import Slider from "../UI/slider/Slider";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-black.svg";
import classes from "./CasesList.module.scss";

const Case = ({ c, t }) => {
  const [displayDetails, setDisplayDetails] = useState(false);
  const displayDetaisHandler = () => {
    setDisplayDetails(!displayDetails);
  };

  const caseArray = Object.keys(c).map((key) => [String(key), c[key]]);
  const descr = caseArray.filter((fild) => fild[0] === "descr").shift();

  const descrArr = descr[1]?.split("<p>");

  return (
    <>
      <li className={classes.case}>
        <div>
          <h3>{c.title}</h3>
          <Slider c={c} />
          {displayDetails && (
            <article>
              {descrArr.length ? (
                descrArr.map((p, i) => <p key={i}>{p}</p>)
              ) : (
                <p>нет описания</p>
              )}
            </article>
          )}
          <div className={classes.link_container}>
            <button className={classes.link} onClick={displayDetaisHandler}>
              {displayDetails ? (
                <p>{t("mainDescription.hide")}</p>
              ) : (
                <p>{t("mainDescription.readMore")}</p>
              )}
              <Arrow />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
export default Case;
