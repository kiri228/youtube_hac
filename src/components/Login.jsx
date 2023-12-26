import React, { useContext } from "react";
import styles from "../styles/user.module.css";
import { userContext } from "../contexts/UserContext";

const Login = () => {
  const { login } = useContext(userContext);

  const handle = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    login(data.get("email"), data.get("password"));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handle}>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email@gmail.com"
        />

        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
