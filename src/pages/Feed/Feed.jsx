import { Feedposts } from "../../components/Feedposts/Feedpost";
import Navbar from "../../components/Navbar/Navbar";
import Suggestions from "../../components/Suggestions/Suggestions";
import styles from "./Feed.module.css";

export const Feed = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <Navbar />
        </div>
        <div className={styles.middleContainer}>
          <Feedposts />
        </div>
        <div className={styles.rightContainer}>
          <Suggestions />
        </div>
      </div>
    </>
  );
};
