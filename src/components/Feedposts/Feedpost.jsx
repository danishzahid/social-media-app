import React from "react";
import Styles from "./Feedposts.module.css";
import AlphagramStories from "../AlphagramStories/AlphagramStories";
import PostCard from "../Postcard/PostCard";
import { useEffect } from "react";
import { fetchPosts } from "../../services/services";
import { DataReducer, initialState } from "../../reducers/DataReducer";
import { useReducer } from "react";
import { useData } from "../../contexts/DataContext";

export const Feedposts = () => {
  const { state, dispatch } = useData();
  const { posts } = state;
  // console.log(posts);

  // const fetchedPosts = await fetchPosts();

  useEffect(() => {
    fetchPosts().then((res) => dispatch({ type: "SET_POSTS", payload: res }));
  }, []);

  return (
    <>
      <div className={Styles.feedpostContainer}>
        <AlphagramStories />
        {posts.map((post) => {
          return <PostCard post={post} />;
        })}
      </div>
    </>
  );
};
