import axios from "axios";

export const fetchBlogs = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/blogs")
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
