import React from "react";
import styles from "./Bookmark.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Suggestions from "../../components/Suggestions/Suggestions";
import { Savedposts } from "../../components/Savedposts/Savedposts";

export const Bookmark = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <Navbar />
        </div>
        <div className={styles.middleContainer}>
          <Savedposts />
        </div>
        <div className={styles.rightContainer}>
          <Suggestions />
        </div>
      </div>
    </>
  );
};
