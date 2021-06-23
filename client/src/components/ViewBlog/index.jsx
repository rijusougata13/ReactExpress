import React, { useEffect, useState } from "react";
import axios from "axios";
import { Blog, Wrapper } from "./styles";
import { connect } from "react-redux";
import { fetchBlogs, fetchUserSuccess } from "../../redux";

const ViewBlog = ({ fetchBlogs, blogData, userData, fetchUsers }) => {
  const deleteblog = (id) => {
    axios
      .delete(`http://localhost:5000/blogs/${id}`)
      .then(() => {
        fetchBlogs(userData.token);
      })
      .catch((error) => console.log(error));
  };
  const updateBlog = (id) => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((doc) => {
        doc.data.message.likes += 1;
        console.log(doc.data.message);
        axios
          .patch(`http://localhost:5000/blogs/${id}`, doc.data.message)
          .then(() => fetchBlogs(userData.token));
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    console.log("hello");
    const token = localStorage.getItem("token");
    fetchUsers(token);
    fetchBlogs(userData.token);
  }, [userData.token]);

  return (
    <Wrapper>
      <h1>Blogs</h1>
      <p style={{ width: "10rem", overflow: "auto" }}> {userData.token}</p>
      <Blog>
        {blogData.blogsList.map((blog) => (
          <div
            key={blog._id}
            style={{
              background: "#161A2B",
              margin: "2rem",
              padding: "2rem",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "left",
              position: "relative",
            }}
          >
            <h2>Title : {blog.title}</h2>
            <p style={{ textAlign: "left" }}>Content : {blog.body}</p>
            <p
              style={{
                position: "absolute",
                top: "0rem",
                right: "1rem",
              }}
            >
              Author: {blog.author}
            </p>
            <p>Id: {blog._id}</p>
            <p>
              {" "}
              Likes : {blog.likes}
              {"    "} <button onClick={(e) => updateBlog(blog._id)}>+</button>
            </p>
            <button onClick={(e) => deleteblog(blog._id)}>Delete Blog</button>
          </div>
        ))}
      </Blog>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    blogData: state.blogs,
    userData: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBlogs: (props) => dispatch(fetchBlogs(props)),
    fetchUsers: (props) => dispatch(fetchUserSuccess(props)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewBlog);
