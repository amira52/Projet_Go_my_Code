const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  try {
    const postList = await Post.find();
    res.send({ posts: postList, msg: "get ala posts" });
  } catch (error) {
    res.status(400).send({ msg: "failed", error });
  }
};

exports.getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const findOnePost = await Post.findOne({ _id: id });
    res.send({ msg: "get the post", post: findOnePost });
  } catch (error) {
    res.status(400).send({ msg: "failed to get the post", error });
  }
};
exports.addPost = async (req, res) => {
  try {
    const newPost = new Post({ ...req.body });
    await newPost.save();
    res.send({ msg: "Post added", post: newPost });
  } catch (error) {
    res.status(400).send({ msg: "post not saved", error });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { _id } = req.params;
    await Post.deleteOne({ _id });
    res.send({ msg: "delete succ" });
  } catch (error) {
    res.status(400).send({ msg: "failed to delete Post", error });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.updateOne({ _id: id }, { $set: { ...req.body } });
    res.send({ msg: "updated succ" });
  } catch (error) {
    res.status(400).send({ msg: "failed to update ", error });
  }
};
