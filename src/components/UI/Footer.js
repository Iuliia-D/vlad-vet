import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer_wrapper}>
      <h3>Онлайн</h3>
      <a href="https://instagram.com/justlvet?igshid=Zjc2ZTc4Nzk=">Instagram</a>
      <a href="https://t.me/JustlVet">Telegram</a>
      <p>@ 2022 - VLADISLAV BOCHKAREV </p>
    </div>
  );
};

export default Footer;
