import HeaderBlack from "../UI/HeaderBlack";

const Publication = ({
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
      <h1>Публикации</h1>
    </>
  );
};

export default Publication;
