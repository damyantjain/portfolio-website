import { REFRESH_TOKEN, BLOGS_URL } from "./constants";
import { setAccessToken, removeAccessToken } from "./tokenService";

export const refreshAccessToken = async () => {
  const response = await fetch(REFRESH_TOKEN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (response.ok) {
    const data = await response.json();
    setAccessToken(data.accessToken);
    return data.accessToken;
  } else {
    removeAccessToken();
  }
  return null;
};

export const saveBlog = async ({ editedBlog, publish }) => {
  console.log(JSON.stringify({ ...editedBlog, published: publish }));
  if (!editedBlog._id) {
    return (response = await fetch(BLOGS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...editedBlog, published: publish }),
    }));
  } else {
    return (response = await fetch(`${BLOGS_URL}/${editedBlog._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...editedBlog, published: publish }),
    }));
  }
};
