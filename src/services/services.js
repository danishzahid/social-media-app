export const fetchPosts = async () => {
  try {
    const response = await fetch("/api/posts");
    const data = await response.json();
    return data.posts;
  } catch (err) {
    console.log(err);
  }
};

export const getBookmarks = async () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  // console.log(user.value.token);
  const token = user?.value?.token;
  try {
    const response = await fetch("/api/users/bookmark/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const data = await response.json();
    return data.bookmarks;
  } catch (err) {
    console.log(err);
  }
};

export const saveToBookmarks = async (postId) => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  // console.log(user.value.token);
  const token = user?.value?.token;
  console.log("token: ", token);

  try {
    const response = await fetch(`/api/users/bookmark/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const data = await response.json();
    console.log("bookmarks :", data);
    return data.bookmarks;
  } catch (err) {
    console.log(err);
  }
};

export const removeFromBookmarks = async (postId) => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  // console.log(user.value.token);
  const token = user?.value?.token;
  try {
    const response = await fetch(`/api/users/remove-bookmark/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const data = await response.json();
    return data.bookmarks;
  } catch (err) {
    console.log(err);
  }
};

export const likePost = async (postId) => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  // console.log(user.value.token);
  const token = user?.value?.token;
  try {
    const response = await fetch(`/api/posts/like/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const data = await response.json();
    console.log("data for like api: ", data);
    return data.posts;
  } catch (err) {
    console.log(err);
  }
};

export const unlikePost = async (postId) => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  // console.log(user.value.token);
  const token = user?.value?.token;
  try {
    const response = await fetch(`/api/posts/dislike/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });
    const data = await response.json();
    return data.posts;
  } catch (err) {
    console.log(err);
  }
};
