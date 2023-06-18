import Card from "./components/Card";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { User } from "./types/User";
import UserList from "./components/UserList";
import Modal from "./components/Modal";

const initUsers: User[] = [
  {
    username: "Max",
    age: 31,
    id: Math.random().toString(32).substring(2),
  },
  {
    username: "Megumu",
    age: 25,
    id: Math.random().toString(32).substring(2),
  },
];

const sessionKey = "users";

type ModalDescription = {
  message: string;
  isOpen: boolean;
};

function App() {
  const [users, setUsers] = useState<User[]>(initUsers);
  const [modal, setModal] = useState<ModalDescription>({
    message: "",
    isOpen: false,
  });

  const modalOpenHandler = (message: string) => {
    setModal({ message: message, isOpen: true });
  };

  const modalCloseHandler = () => {
    setModal({ message: "", isOpen: false });
  };

  useEffect(() => {
    const usersJson = sessionStorage.getItem(sessionKey);
    if (usersJson !== null) {
      setUsers(JSON.parse(usersJson));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(sessionKey, JSON.stringify(users));
  }, [users]);

  const addUser = (user: User) => {
    let id = Math.random().toString(32).substring(2);
    while (users.filter((u) => u.id === id).length !== 0) {
      id = Math.random().toString(32).substring(2);
    }
    user.id = id;
    setUsers((prev) => [...prev, user]);
  };

  return (
    <main className={styles.container}>
      <Card addUser={addUser} modalOpenHandler={modalOpenHandler} />
      <UserList users={users} />
      {modal.isOpen && (
        <Modal
          message={modal.message}
          closeHander={modalCloseHandler}
        />
      )}
    </main>
  );
}

export default App;
