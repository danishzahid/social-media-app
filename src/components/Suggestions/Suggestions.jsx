import React from "react";
import styles from "./Suggestions.module.css";

const Suggestions = () => {
  // Dummy data for suggested users
  const suggestedUsers = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
    },
    // Add more users as needed
  ];

  return (
    <div className={styles.suggestion}>
      <div className={styles.profileInfo}>
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className={styles.profileImage}
        />
        <div className={styles.userInfo}>
          <p className={styles.name}>Your Name</p>
          <button className={styles.logoutButton}>Logout</button>
        </div>
      </div>
      <div className={styles.suggestedUsers}>
        <h2>Suggested Users</h2>
        {suggestedUsers.map((user) => (
          <div key={user.id} className={styles.userCard}>
            <img
              src={user.profileImage}
              alt={user.name}
              className={styles.userImage}
            />
            <p className={styles.userName}>{user.name}</p>
            <p className={styles.userUsername}>@{user.username}</p>
            {/* Add Follow button here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
