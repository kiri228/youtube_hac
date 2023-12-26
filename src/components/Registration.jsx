import React, { useContext } from "react";
import styles from "../styles/user.module.css";
import { userContext } from "../contexts/UserContext";

const Registration = () => {
  const { register } = useContext(userContext);

  const handle = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    register(
      data.get("email"),
      data.get("password"),
      data.get("displayName"),
      data.get("image")
    );
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
        <input type="text" id="image" name="image" placeholder="avatar URL" />
        <input
          type="text"
          id="displayName"
          name="displayName"
          placeholder="displayName"
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
        />
        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
