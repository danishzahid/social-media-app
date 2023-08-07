import React from "react";
import styles from "./PostCard.module.css";
import { useReducer } from "react";
import { DataReducer, initialState } from "../../reducers/DataReducer";
import {
  likePost,
  removeFromBookmarks,
  saveToBookmarks,
  unlikePost,
} from "../../services/services";
import { useData } from "../../contexts/DataContext";
import { toast } from "react-toastify";

const PostCard = ({ post }) => {
  const { image, content, likes, _id } = post;
  console.log(_id);
  const { likesCount } = likes;
  console.log(post);

  const { state, dispatch } = useData();

  console.log(state);
  console.log(state.savedPosts);

  return (
    <>
      <div className={styles.postCard}>
        <div className={styles.imageWrapper}>
          <img src={image} alt="Post" className={styles.image} />
          <span className={styles.editIcon}>Edit</span>
        </div>
        <div className={styles.caption}>{content}</div>
        <div className={styles.icons}>
          {/* <i className={`far fa-heart ${styles.icon}`}></i> */}
          {state.likedPosts.filter((post) => post._id === _id).length == 0 ? (
            <i
              onClick={() => {
                likePost(_id).then((res) => {
                  dispatch({ type: "SET_LIKED_POSTS", payload: res });
                  dispatch({ type: "SET_POSTS", payload: res });
                  toast.success("Post liked");
                  console.log();
                });
              }}
              className={`far fa-heart ${styles.icon}`}
            ></i>
          ) : (
            <i
              onClick={() => {
                unlikePost(_id).then((res) => {
                  dispatch({ type: "UNLIKE_POST", payload: res });
                  dispatch({ type: "SET_POSTS", payload: res });
                  toast.error("Post unliked");
                });
              }}
              className={`fas fa-heart ${styles.icon}`}
            ></i>
          )}
          {/* <i
            onClick={() => {
              if (
                state.savedPosts.filter((post) => post._id === _id).length == 0
              ) {
                saveToBookmarks(_id).then((res) => {
                  dispatch({ type: "SET_SAVED_POSTS", payload: res });
                  toast.success("Post saved to bookmarks");
                });
              } else {
                removeFromBookmarks(_id).then((res) => {
                  dispatch({ type: "REMOVE_SAVED_POST", payload: res });
                  toast.error("Post removed from bookmarks");
                });
              }
            }}
            className={`far fa-bookmark ${styles.icon}`}
            style={{
              color:
                state.savedPosts.filter((post) => post._id === _id).length == 0
                  ? "black"
                  : "green",
            }}
          ></i> */}
          {state.savedPosts.filter((post) => post._id === _id).length == 0 ? (
            <i
              onClick={() => {
                saveToBookmarks(_id).then((res) => {
                  dispatch({ type: "SET_SAVED_POSTS", payload: res });
                  toast.success("Post saved to bookmarks");
                });
              }}
              className={`far fa-bookmark ${styles.icon}`}
            ></i>
          ) : (
            <i
              onClick={() => {
                removeFromBookmarks(_id).then((res) => {
                  dispatch({ type: "REMOVE_SAVED_POST", payload: res });
                  toast.error("Post removed from bookmarks");
                });
              }}
              className={`fas fa-bookmark ${styles.icon}`}
            ></i>
          )}
          <i className={`far fa-trash-alt ${styles.icon}`}></i>
        </div>
        <div className={styles.likes}>{likesCount} likes</div>
      </div>
    </>
  );
};

export default PostCard;
