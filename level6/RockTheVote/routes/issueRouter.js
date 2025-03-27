const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/issue");

// Get All Issues
// Get all issues
issueRouter.get("/", async (req, res, next) => {
  try {
    const issues = await Issue.find();
    return res.status(200).send(issues);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Get issues by user id
issueRouter.get("/user", async (req, res, next) => {
  try {
    const issues = await Issue.find({ user: req.auth._id });
    return res.status(200).send(issues);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Add new issue
issueRouter.post("/", async (req, res, next) => {
  try {
    req.body.user = req.auth._id;
    req.body.username = req.auth.username;
    const newIssue = new Issue(req.body);
    const savedIssue = await newIssue.save();
    return res.status(201).send(savedIssue);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

issueRouter.delete("/:issueId", async (req, res, next) => {
  try {
    const deletedIssue = await Issue.findByIdAndDelete(req.params.issueId);
    if (!deletedIssue) {
      return res.status(404).send({ errMsg: "Issue not found" });
    }
    res.status(204).send(); // No content to send back
  } catch (err) {
    res.status(500);
    next(err);
  }
});

// Update Issue
issueRouter.put("/:issueId", async (req, res, next) => {
  try {
    const updatedIssue = await Issue.findOneAndUpdate(
      { _id: req.params.issueId, user: req.auth._id }, // Ensure ownership
      req.body,
      { new: true }
    );
    if (!updatedIssue) {
      return res
        .status(403)
        .send({ errMsg: "Not authorized to edit this issue" });
    }
    res.status(200).send(updatedIssue);
  } catch (err) {
    next(err);
  }
});

// upvote
issueRouter.put("/upvote/:id", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.id },
    {
      $addToSet: { likedUsers: req.auth._id },
      $pull: { dislikedUsers: req.auth._id },
    },
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedIssue);
    }
  );
});

issueRouter.put("/downvote/:id", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.id }, // finds the issue in the database with the _id that matches the requested issue
    {
      $addToSet: { dislikedUsers: req.auth._id }, //  updates the issue by adding the user's unique identifier to the dislikedUsers array
      $pull: { likedUsers: req.auth._id }, // addToSet operator ensures the user is only added if it doesn't already exist because sets are unique values
    },
    { new: true }, // returns the updated issue instead of the original
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedIssue); // 201 means created
    }
  );
});

module.exports = issueRouter;
