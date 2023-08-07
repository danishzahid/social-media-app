import React from "react";
import styles from "./AlphagramStories.module.css";

const AlphagramStories = () => {
  // Replace the 'letters' array with your own data or logic for displaying the letters.
  const letters = ["A", "L", "P", "H", "A", "G", "R", "A", "M"];

  return (
    <div className={styles.alphagramStories}>
      {letters.map((letter, index) => (
        <div key={index} className={styles.story}>
          <div className={styles.circle}>
            <p>{letter}</p>
          </div>
          <p className={styles.letter}>{letter}</p>
        </div>
      ))}
    </div>
  );
};

export default AlphagramStories;
