import react from "react";
import styles from "./Savedposts.module.css";
import { useData } from "../../contexts/DataContext";
import PostCard from "../Postcard/PostCard";
import { useEffect } from "react";
import { getBookmarks } from "../../services/services";

export const Savedposts = () => {
  const { state, dispatch } = useData();
  const { savedPosts } = state;
  console.log(savedPosts, "initial saved posts");

  useEffect(() => {
    getBookmarks().then((res) =>
      dispatch({ type: "SET_SAVED_POSTS", payload: res })
    );
  }, []);

  return (
    <>
      <div className={styles.savedpostsContainer}>
        <h2>Saved Posts!</h2>
        {savedPosts?.map((post) => {
          return <PostCard post={post} />;
        })}
      </div>
    </>
  );
};
