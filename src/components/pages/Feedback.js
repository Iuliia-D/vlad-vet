import HeaderBlack from "../UI/HeaderBlack";

const Feedback = ({ t, changeLanguage, langMenuActive, enteredLanguage }) => {
  return (
    <>
      <HeaderBlack
        t={t}
        changeLanguage={changeLanguage}
        langMenuActive={langMenuActive}
        enteredLanguage={enteredLanguage}
      />
      <h1>Feedback</h1>
    </>
  );
};

export default Feedback;
