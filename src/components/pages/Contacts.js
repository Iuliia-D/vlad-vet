import HeaderBlack from "../UI/HeaderBlack";
import classes from "./Contacts.module.scss";

const Contacts = ({ t, changeLanguage, langMenuActive, enteredLanguage }) => {
  return (
    <>
      <HeaderBlack
        t={t}
        changeLanguage={changeLanguage}
        enteredLanguage={enteredLanguage}
        langMenuActive={langMenuActive}
      />
      <div className={classes.contacts_wrapper}>
        <h1>{t("contacts.title")}</h1>
        <a href="https://vk.com/justlvet">VK</a>
        <a href="https://instagram.com/justlvet?igshid=Zjc2ZTc4Nzk=">
          Instagram
        </a>
        <a href="https://t.me/JustlVet">Telegram</a>
        <a href="https://wa.me/79118206707">WhatsApp</a>
        <h1>{t("contacts.title2")}</h1>
        <p>{t("contacts.part1")}</p>
        <a href="https://goo.gl/maps/MAsK7MAD6W15fSwQ9">
          22 Ilije Plamenca, Podgorica, Montenegro
        </a>
      </div>

      <div className={classes.contacts_img}></div>
    </>
  );
};

export default Contacts;
