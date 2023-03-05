import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import classes from "./Form.module.scss";

const Form = ({ t, changeLanguage, langMenuActive, enteredLanguage }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        <h3>Напишите мне</h3>
        <form ref={form} onSubmit={sendEmail} autoComplete="off">
          <input
            id="username"
            type="text"
            placeholder="Имя"
            name="name"
            value={name}
            onChange={nameChangeHandler}
          ></input>
          <input
            id="email"
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={emailChangeHandler}
            value={email}
          ></input>
          <textarea
            id="message"
            type="number"
            placeholder="Сообщение"
            name="message"
            value={message}
            onChange={messageChangeHandler}
          ></textarea>
          <button type={"submit"}>Отправить</button>
          {/* <input type="submit" value="Send" /> */}
        </form>
      </div>
    </>
  );
};

export default Form;
