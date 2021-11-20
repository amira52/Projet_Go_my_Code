const express = require("express");
const router = express.Router();
const {
  getAllTopics,
  addTopic,
  deleteTopic,
  updateTopic,
  getOneTopic,
} = require("../controllers/TopicList");
const isAdmin = require("../middleware/isAdmin");
const isAuth = require("../middleware/isAuth");

//Post methode
router.post("/", isAuth, isAdmin, addTopic);
//Get (All contact) methode
router.get("/", getAllTopics);

//Get contact by ID
router.get("/:id", getOneTopic);

//delete contact
router.delete("/:id", isAuth, isAdmin, deleteTopic);

//Update contact
router.put("/:id", isAuth, isAdmin, updateTopic);

module.exports = router;
