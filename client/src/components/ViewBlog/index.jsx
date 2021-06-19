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

  const deleteblog = (id) => {
    axios
      .delete(`http://localhost:5000/blogs/${id}`)
      .then(() => {
        fetchBlogs();
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
          .then(() => fetchBlogs());
      })
      .catch((error) => console.log(error));
  };
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBlogs: () => dispatch(fetchBlogs()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewBlog);
