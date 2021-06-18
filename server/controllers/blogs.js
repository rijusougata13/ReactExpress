const mongoose = require("mongoose");
const Blog = require("../models/Blog");

const getBlog = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(201).json(blogs);
  } catch (error) {
    res.status(500).json({
      message: "Couldn't get Blogs",
    });
  }
};

const postBlog = async (req, res) => {
  const body = req.body;
  console.log(body);
  const newBlog = new Blog({
    ...body,
    _id: mongoose.Types.ObjectId(),
  });
  try {
    await newBlog
      .save()
      .then(() => {
        res.status(201).json({
          message: "Blog Saved!",
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: error,
        });
      });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const viewBlog = (req, res) => {
  res.json({
    msg: "View Blog",
  });
};

exports.getBlog = getBlog;
exports.postBlog = postBlog;
exports.viewBlog = viewBlog;
