import axios from "axios";

export const fetchBlogs = (token) => {
  return (dispatch) => {
    console.log("token : ");
    console.log(token);
    const headers = {
      "Content-Type": "application/json",
      "auth-token": token,
    };
    axios
      .get("http://localhost:5000/blogs", {
        headers: headers,
      })
      .then((response) => {
        // response.data is the users
        const blogs = response.data;
        dispatch(fetchBlogsSuccess(blogs));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchBlogsFailure(error.message));
      });
  };
};

export const fetchBlogsSuccess = (blogs) => {
  return {
    type: "FETCH_BLOGS_SUCCESS",
    payload: blogs,
  };
};

export const fetchBlogsFailure = (error) => {
  return {
    type: "FETCH_BLOGS_FAILURE",
    payload: error,
  };
};
