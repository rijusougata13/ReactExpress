import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Wrapper } from "./styles";
import { connect } from "react-redux";
import { fetchBlogs } from "../../redux/index";

const SubmitBlog = (props) => {
  const submitblog = (event) => {
    // event.preventDefault();
    const data = {
      title: title,
      body: body,
      author: author,
    };
    axios
      .post("http://localhost:5000/blogs", data)
      .then(() => [fetchBlogs()])
      .catch((error) => console.log(error));
    setTitle("");
    setBody("");
    setAuthor("");
  };
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <Wrapper>
      <Form onSubmit={submitblog}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        ></input>
        <label>Body</label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></input>
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <input
          // onSubmit={submitblog}
          type="submit"
          style={{ marginTop: "2rem" }}
        ></input>
      </Form>
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
export default connect(mapStateToProps, mapDispatchToProps)(SubmitBlog);
