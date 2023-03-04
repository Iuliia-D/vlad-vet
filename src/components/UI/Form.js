import { useState } from "react";
// import classes from "./Form.module.scss";

const Form = ({ t, changeLanguage, langMenuActive, enteredLanguage }) => {
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

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <h3>Напишите мне</h3>
      <form onSubmit={submitFormHandler}>
        <input
          id="username"
          type="text"
          placeholder="Имя"
          value={name}
          onChange={nameChangeHandler}
        ></input>
        <input
          id="email"
          type="text"
          placeholder="E-mail"
          onChange={emailChangeHandler}
          value={email}
        ></input>
        <textarea
          id="message"
          type="number"
          placeholder="Сообщение"
          value={message}
          onChange={messageChangeHandler}
        ></textarea>
        <button type={"submit"}>Отправить</button>
      </form>
    </>
  );
};

export default Form;
