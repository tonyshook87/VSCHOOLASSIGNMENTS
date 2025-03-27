const express = require("express");
const commentRouter = express.Router();
const Comment = require("../models/comment");

// Get comment request
commentRouter.get("/", (req, res, next) => {
  Comment.find((err, comment) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(comment);
  });
});

// Add new comment
commentRouter.post("/:issueId", async (req, res, next) => {
  try {
    req.body.user = req.auth._id;
    req.body.issue = req.params.issueId;
    req.body.username = req.auth.username;

    const newComment = new Comment(req.body);
    const savedComment = await newComment.save(); // Save the comment
    return res.status(201).send(savedComment); // Send the created comment
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

commentRouter.put("/:commentId", async (req, res, next) => {
  try {
    const updatedComment = await Comment.findOneAndUpdate(
      { _id: req.params.commentId, user: req.auth._id }, // Ensure ownership
      req.body,
      { new: true }
    );
    if (!updatedComment) {
      return res
        .status(403)
        .send({ errMsg: "Not authorized to edit this comment" });
    }
    res.status(200).send(updatedComment); // Send updated comment
  } catch (err) {
    console.error("Error editing comment:", err);
    res.status(500).send({ errMsg: "Internal server error" });
  }
});

commentRouter.delete("/:commentId", async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    if (!comment) {
      return res.status(404).send({ errMsg: "Comment not found" });
    }

    if (comment.user.toString() !== req.auth._id) {
      // Ensure ownership
      return res
        .status(403)
        .send({ errMsg: "Not authorized to delete this comment" });
    }

    await Comment.findByIdAndDelete(req.params.commentId);
    res.status(204).send(); // Successfully deleted
  } catch (err) {
    console.error("Error deleting comment:", err);
    res.status(500).send({ errMsg: "Internal server error" });
  }
});

module.exports = commentRouter;
