import React from "react";
import styles from "./Home.module.css";
import Home_hero from "../../assets/Home_hero.svg";
import { Authform } from "../../components/Authform/Authform";

export const Home = () => {
  return (
    <div>
      <div className={styles.innerBackground}>
        <div>
          <img src={Home_hero} alt="pic" className={styles.Home_hero} />
        </div>
        <div className={styles.rightContainer}>
          <h1>Welcome to Alphagram</h1>
          <Authform />
        </div>
      </div>
      <footer>
        <p>English (UK). All rights reserved. © 2023 Alphagram</p>
      </footer>
    </div>
  );
};
