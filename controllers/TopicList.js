const Topic = require("../models/TopicList");

exports.getAllTopics = async (req, res) => {
  try {
    const topicList = await Topic.find();
    res.send({ topics: topicList, msg: "get al contact" });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};

exports.getOneTopic = async (req, res) => {
  try {
    const { id } = req.params;
    const findOneTopic = await Topic.findOne({ _id: id });
    res.send({ msg: "get the topic", topic: findOneTopic });
  } catch (error) {
    res.status(400).send({ msg: "failed to get the topic", error });
  }
};
exports.addTopic = async (req, res) => {
  try {
    const newTopic = new Topic({ ...req.body });
    await newTopic.save();
    res.send({ msg: "Topic added", topic: newTopic });
  } catch (error) {
    res.status(400).send({ msg: "topic not saved", error });
  }
};

exports.deleteTopic = async (req, res) => {
  try {
    const { id } = req.params;
    await Topic.deleteOne({ _id: id });
    res.send({ msg: "delete succ" });
  } catch (error) {
    res.status(400).send({ msg: "failed to delete Topic", error });
  }
};

exports.updateTopic = async (req, res) => {
  try {
    const { id } = req.params;
    await Topic.updateOne({ _id: id }, { $set: { ...req.body } });
    res.send({ msg: "updated succ" });
  } catch (error) {
    res.status(400).send({ msg: "failed to update ", error });
  }
};
