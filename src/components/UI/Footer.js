import classes from "./Footer.module.scss";

const Footer = ({ t }) => {
  return (
    <div className={classes.footer_wrapper}>
      <h3>{t("footerSocial")}</h3>
      <a
        href="https://instagram.com/justlvet?igshid=Zjc2ZTc4Nzk="
        target="blank"
      >
        Instagram
      </a>
      <a href="https://t.me/JustlVet" target="blank">
        Telegram
      </a>
      <p>@ 2023 - VLADISLAV BOCHKAREV </p>
    </div>
  );
};

export default Footer;
