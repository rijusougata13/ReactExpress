const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  body: String,
  author: String,
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
