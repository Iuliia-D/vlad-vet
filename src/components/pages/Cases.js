import HeaderBlack from "../UI/HeaderBlack";

const Cases = ({ t, changeLanguage, langMenuActive, enteredLanguage }) => {
  return (
    <>
      <HeaderBlack
        t={t}
        changeLanguage={changeLanguage}
        langMenuActive={langMenuActive}
        enteredLanguage={enteredLanguage}
      />
      <h1>Клинические случаи</h1>
    </>
  );
};

export default Cases;
