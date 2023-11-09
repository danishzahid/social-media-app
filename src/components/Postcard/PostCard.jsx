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
  console.log(_id, "post id");

  const { likeCount } = likes;
  console.log(likes, "likes");
  console.log(likeCount, "likesCount");

  // console.log(post);

  const { state, dispatch } = useData();

  // console.log(state);
  // console.log(state.savedPosts);

  const [expanded, setExpanded] = React.useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const isLiked = likes.likeCount > 0;

  const handleLike = () => {
    if (isLiked) {
      unlikePost(_id).then((res) => {
        dispatch({ type: "UNLIKE_POST", payload: res }); // Update liked posts
        dispatch({ type: "SET_POSTS", payload: res }); // Update all posts
        toast.error("Post unliked");
      });
    } else {
      likePost(_id).then((res) => {
        dispatch({ type: "SET_LIKED_POSTS", payload: res }); // Update liked posts
        dispatch({ type: "SET_POSTS", payload: res }); // Update all posts
        toast.success("Post liked");
      });
    }
  };
  return (
    <>
      <div className={styles.postCard}>
        <div className={styles.imageWrapper}>
          <img src={image} alt="Post" className={styles.image} />
          <span className={styles.editIcon}>Edit</span>
        </div>
        {/* <div className={styles.caption}>{content}</div> */}
        <div className={styles.caption}>
          {expanded ? content : content.slice(0, 100)}{" "}
          {/* Display full content if expanded, or a truncated version */}
          {content.length > 100 && (
            <span className={styles.readMore} onClick={toggleExpanded}>
              {expanded ? "Read Less" : "Read More"}
            </span>
          )}
        </div>
        <div className={styles.icons}>
          {/* <i className={`far fa-heart ${styles.icon}`}></i> */}
          {isLiked ? (
            <i
              onClick={handleLike}
              className={`fas fa-heart ${styles.icon}`}
              style={{ color: "red" }}
            ></i>
          ) : (
            <i
              onClick={handleLike}
              className={`far fa-heart ${styles.icon}`}
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
        <div className={styles.likes}>{likeCount} likes</div>
      </div>
    </>
  );
};

export default PostCard;
