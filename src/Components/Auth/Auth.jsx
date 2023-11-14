import React, { useState } from "react";
import styles from "./Auth.module.css";

const Auth = (props) => {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    setLoading(true);
    props.server(login, password);
  }

  if (props.isAuth) {
    return <h1>Вы успешно авторизовались!</h1>;
  }

  return loading ? (
    <h1>loading</h1>
  ) : (
    <div className={styles.authWrap}>
      <form className={styles.form} onSubmit={submit}>
        <h1 className={styles.title}>Авторизация</h1>
        <div className={styles.inputWrap}>
          <input
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            value={login}
            className={styles.input}
            type="email"
            name="email"
            id="email"
            placeholder="Введите почту"
          />
        </div>
        <div className={styles.inputWrap}>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className={styles.input}
            type="password"
            name="password"
            id="password"
            placeholder="Введите пароль"
          />
        </div>
        <div className={styles.btnWrap}>
          <button className={styles.btn}>Авторизоваться</button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
