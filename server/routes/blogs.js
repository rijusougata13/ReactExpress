const express = require("express");
const router = express.Router();
const {
  getBlog,
  postBlog,
  viewBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogs");
const verify = require("../controllers/verifyToken");

router.get("/", verify, getBlog);
router.post("/", postBlog);
router.get("/:blogId", viewBlog);
router.delete("/:blogId", deleteBlog);
router.patch("/:blogId", updateBlog);

module.exports = router;
