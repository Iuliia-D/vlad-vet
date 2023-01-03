import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer_wrapper}>
      <h3>Онлайн</h3>
      <a href="#">Instagram</a>
      <a href="#">Telegram</a>
      <p>@ 2022 - VLADISLAV BOCHKAREV </p>
    </div>
  );
};

export default Footer;
