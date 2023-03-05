import classes from "./FeedbackList.module.scss";

const Feedback = ({ t, f }) => {
  const feedbackArray = Object.keys(f).map((key) => [String(key), f[key]]);
  const text = feedbackArray.filter((fild) => fild[0] === "text").shift();

  const textArr = text[1]?.split("<p>");

  return (
    <>
      <li className={classes.feedback__text}>
        <article>
          <h3>{f.name}</h3>

          {textArr.length ? (
            textArr.map((p, i) => <p key={i}>{p}</p>)
          ) : (
            <p>нет описания</p>
          )}
        </article>
      </li>
    </>
  );
};

export default Feedback;
