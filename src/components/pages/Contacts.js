import Header from "../UI/Header";
import classes from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <>
      <Header />
      <div className={classes.contacts_wrapper}>
        <h1>Контакты</h1>
        <a href="https://vk.com/justlvet">VK</a>
        <a href="https://instagram.com/justlvet?igshid=Zjc2ZTc4Nzk=">
          Instagram
        </a>
        <a href="https://t.me/JustlVet">Telegram</a>
        <a>WhatsApp</a>
      </div>
      <div className={classes.contacts_img}></div>
    </>
  );
};

export default Contacts;
