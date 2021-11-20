const express = require("express");
const router = express.Router();
const {
  addPost,
  getAllPosts,
  getOnePost,
  deletePost,
  updatePost,
} = require("../controllers/Post");

//Post methode
router.post("/", addPost);
//Get (All contact) methode
router.get("/", getAllPosts);

//Get contact by ID
router.get("/:id", getOnePost);

//delete contact
router.delete("/:_id", deletePost);

//Update contact
router.put("/:id", updatePost);

module.exports = router;
