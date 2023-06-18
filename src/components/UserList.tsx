import { User } from "../types/User";
import styles from "./UserList.module.css";

type UserListProps = {
  users: User[];
};

const UserList = (props: UserListProps) => {
  const { users } = props;

  return (
    <div className={styles.container}>
      <ul>
        {users.map((user) => (
          <li className={styles.row} key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
