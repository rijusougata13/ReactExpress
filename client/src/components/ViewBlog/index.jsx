import React, { useEffect, useState } from "react";
import axios from "axios";
import { Blog, Wrapper } from "./styles";
import { connect } from "react-redux";
import { fetchBlogs } from "../../redux";

// const fetchData = async () => axios.get("http://localhost:5000/blogs");

const ViewBlog = ({ fetchBlogs, blogData }) => {
  // const [blogs, setBlogs] = useState([{}]);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     axios.get("http://localhost:5000/blogs").then((res) => {
  //       // console.log(res.data);
  //       setBlogs(res.data);
  //     });

  //     // console.log("hello");
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, []);
  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <Wrapper>
      <h1>Blogs</h1>
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
            <p> Likes : {blog.likes}</p>
          </div>
        ))}
      </Blog>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    blogData: state.blogs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBlogs: () => dispatch(fetchBlogs()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewBlog);
