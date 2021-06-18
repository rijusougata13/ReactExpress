const express = require("express");
const router = express.Router();
const { getBlog, postBlog, viewBlog } = require("../controllers/blogs");

router.get("/", getBlog);
router.post("/", postBlog);
router.get("/:blogId", viewBlog);

module.exports = router;
