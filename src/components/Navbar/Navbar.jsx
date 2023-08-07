import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.heading}>Alphagram</h1>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search" />
        <i className={`fas fa-search ${styles.searchIcon}`} />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to={"/feed"}>
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <i className="fas fa-compass"></i> Explore
          </Link>
        </li>
        <li>
          <Link to={"/bookmark"}>
            <i className="fas fa-bookmark"></i> Bookmark
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <i className="fas fa-user"></i> Profile
          </Link>
        </li>
      </ul>
      <button className={styles.newPostButton}>
        <i className="fas fa-plus"></i> Create New Post
      </button>
    </div>
  );
};

export default Navbar;
