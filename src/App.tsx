import Card from "./components/Card";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { User } from "./types/User";
import UserList from "./components/UserList";

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

function App() {
  const [users, setUsers] = useState<User[]>(initUsers);

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
      <Card addUser={addUser} />
      <UserList users={users} />
    </main>
  );
}

export default App;
