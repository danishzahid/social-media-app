export const initialState = {
  posts: [],
  savedPosts: [],
  likedPosts: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };

    case "SET_SAVED_POSTS":
      return {
        ...state,
        savedPosts: action.payload,
      };
    case "REMOVE_SAVED_POST":
      return {
        ...state,
        savedPosts: action.payload,
      };
    case "SET_LIKED_POSTS":
      return {
        ...state,
        likedPosts: action.payload,
      };
    case "UNLIKE_POST":
      return {
        ...state,
        likedPosts: action.payload,
      };
    default:
      return state;
  }
};
