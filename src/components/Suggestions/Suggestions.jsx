import React, { useContext } from "react";
import styles from "./Suggestions.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { fetchUsers } from "../../services/services";
import { useData } from "../../contexts/DataContext";

const Suggestions = () => {
  // Dummy data for suggested users
  // const suggestedUsers = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     username: "johndoe",
  //     profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     username: "janesmith",
  //     profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
  //   },
  //   // Add more users as needed
  // ];

  const { state, dispatch } = useData();

  useEffect(() => {
    fetchUsers().then((res) => {
      dispatch({ type: "SET_USERS", payload: res });
    });
  }, []);

  console.log(state.users, "users");

  const { user, setUser } = useContext(AuthContext);
  console.log("user", user.user);

  return (
    <div className={styles.suggestion}>
      <div className={styles.profileInfo}>
        <img
          src="https://media.licdn.com/dms/image/C5603AQHez4IA7i6dGA/profile-displayphoto-shrink_800_800/0/1592207162697?e=2147483647&v=beta&t=7XXT4qCV9FtgtDdxUBWy9E5zOvDKrilJj6UEAFA_v7A"
          alt="Profile"
          className={styles.profileImage}
        />
        <div className={styles.userInfo}>
          <p className={styles.name}>
            {user.user.firstName + " " + user.user.lastName}
          </p>
          <button
            className={styles.logoutButton}
            onClick={() => {
              // console.log(user.user);
              // localStorage.removeItem(user);
              // console.log(user);
              setUser({ user: null, token: null });

              // window.location.reload();
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <div className={styles.suggestedUsers}>
        <h2>Suggested Users</h2>
        {state.users.map((user) => (
          <div key={user.id} className={styles.userCard}>
            <img
              src={user.profileImage}
              alt={user.name}
              className={styles.userImage}
            />
            <p className={styles.userName}>
              {user.firstName + " " + user.lastName}
            </p>
            <p className={styles.userUsername}>@{user.username}</p>
            {/* Add Follow button here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
