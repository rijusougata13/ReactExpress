const mongoose = require("mongoose");
const Blog = require("../models/Blog");
const verify = require("./verifyToken");

const getBlog = async (req, res) => {
  // console.log(req.user);
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
    _uid: mongoose.Types.ObjectId(),
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
  Blog.findById(req.params.blogId)
    .then((doc) =>
      res.status(201).json({
        message: doc,
      })
    )
    .catch((error) =>
      res.status(500).json({
        messsage: error,
      })
    );
};

const updateBlog = async (req, res) => {
  Blog.findByIdAndUpdate(req.params.blogId, req.body)
    .then(() =>
      res.status(201).json({
        message: "succesfully updated",
      })
    )
    .catch((error) =>
      res.status(500).json({
        message: error,
      })
    );
};

const deleteBlog = (req, res) => {
  const id = req.params.blogId;
  Blog.findById(id)
    .then(() => {
      Blog.remove({ _id: id })
        .then((result) => {
          res.status(201).json({
            message: "succesfully delted",
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: error,
          });
        });
    })
    .catch((error) =>
      res.status(500).json({
        message: error,
      })
    );
};
exports.getBlog = getBlog;
exports.postBlog = postBlog;
exports.viewBlog = viewBlog;
exports.deleteBlog = deleteBlog;
exports.updateBlog = updateBlog;
