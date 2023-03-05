import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import classes from "./Form.module.scss";

const Form = ({ t, changeLanguage, langMenuActive, enteredLanguage }) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [successMassage, setSuccessMassage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const enteredName = name;
    const enteredEmail = email;
    const enteredMessage = message;

    if (enteredName.trim().length === 0 || enteredMessage.trim().length === 0) {
      setError({
        title: t("formSubmit.part1"),
        message: t("formSubmit.part2"),
      });
      return;
    }
    if (!enteredEmail.includes("@") && !enteredEmail.includes(".")) {
      setError({
        title: t("formSubmit.part3"),
        message: t("formSubmit.part4"),
      });
      return;
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_YOUR_SERVICE_ID,
          process.env.REACT_APP_YOUR_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            setSuccessMassage({
              title: t("formSubmit.part5"),
              message: t("formSubmit.part6"),
            });
            console.log(result.text);
          },
          (error) => {
            // setError({
            //   title: "Error",
            //   message: "Something went wrong",
            // });
            console.log(error.text);
          }
        );

      setName("");
      setEmail("");
      setMessage("");
      setError("");

      // console.log(name, email, message);
      // setError("");
    }
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className={classes.form_wrapper}>
        <h3>{t("form.title")}</h3>
        {error ? (
          <div className={classes.form_error}>
            <p>{error.title}</p>
            <p>{error.message}</p>
          </div>
        ) : (
          ""
        )}
        {successMassage ? (
          <div className={classes.form_success}>
            <p>{successMassage.title}</p>
            <p>{successMassage.message}</p>
          </div>
        ) : (
          ""
        )}
        <form ref={form} onSubmit={sendEmail} autoComplete="off">
          <input
            id="username"
            type="text"
            placeholder={t("form.name")}
            name="name"
            maxLength="100"
            value={name}
            onChange={nameChangeHandler}
          ></input>
          <input
            id="email"
            type="text"
            placeholder={t("form.email")}
            maxLength="100"
            name="email"
            onChange={emailChangeHandler}
            value={email}
          ></input>
          <textarea
            id="message"
            type="number"
            placeholder={t("form.message")}
            name="message"
            maxLength="2500"
            value={message}
            onChange={messageChangeHandler}
          ></textarea>

          <button type={"submit"}>{t("form.send")}</button>
          {/* <input type="submit" value="Send" /> */}
        </form>
      </div>
    </>
  );
};

export default Form;
