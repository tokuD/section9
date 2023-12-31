import React, { useState } from "react";
import Button from "./Button";
import styles from "./Card.module.css";
import { User } from "../types/User";

const initUser: User = {
  username: "",
  age: 0,
  id: "",
};

type CardProps = {
  addUser: (user: User) => void;
  modalOpenHandler: (message: string) => void;
};

const Card = (props: CardProps) => {
  const { addUser, modalOpenHandler } = props;
  const [user, setUser] = useState<User>(initUser);

  const submitHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    // validation
    if (user.username.trim().length === 0 && user.age < 0) {
      modalOpenHandler("Please enter valid username and age.");
      return;
    }
    if (user.username.trim().length === 0) {
      modalOpenHandler("Please enter a valid username.");
      return;
    }
    if (user.age < 0) {
      modalOpenHandler("Please enter a valid age.");
      return;
    }
    addUser(user);
    setUser(initUser);
  };

  return (
    <form action="" className={styles.card}>
      <label htmlFor="username" className={styles.label}>
        Username
      </label>
      <input
        type="text"
        id="username"
        className={styles.input}
        value={user.username}
        onChange={(event) =>
          setUser((prev) => ({ ...prev, username: event.target.value }))
        }
      />
      <label htmlFor="age" className={styles.label}>
        Age(Years)
      </label>
      <input
        type="number"
        id="age"
        className={styles.input}
        value={user.age}
        onChange={(event) =>
          setUser((prev) => ({ ...prev, age: parseInt(event.target.value) }))
        }
      />
      <Button submitHandler={submitHandler}>Add User</Button>
    </form>
  );
};

export default Card;
