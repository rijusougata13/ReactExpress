const express = require("express");
const router = express.Router();
const {
  getBlog,
  postBlog,
  viewBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogs");

router.get("/", getBlog);
router.post("/", postBlog);
router.get("/:blogId", viewBlog);
router.delete("/:blogId", deleteBlog);
router.patch("/:blogId", updateBlog);

module.exports = router;
