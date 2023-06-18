import Card from "./components/Card";
import styles from "./App.module.css";
import { useState } from "react";
import { User } from "./types/User";

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

function App() {
  const [users, setUsers] = useState<User[]>(initUsers);

  return (
    <main className={styles.container}>
      <Card />
    </main>
  );
}

export default App;
