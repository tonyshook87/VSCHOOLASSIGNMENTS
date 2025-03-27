const express = require("express");
const authRouter = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

// Signup
authRouter.post("/signup", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      res.status(403);
      return next(new Error(`User ${req.body.username} already exists`));
    }
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    // payload, // secret
    const token = jwt.sign(savedUser.toObject(), process.env.SECRET);
    return res.status(201).send({ user: savedUser, token });
  } catch (error) {
    res.status(500);
    return next(error);
  }
});
//   User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
//     if (err) {
//       res.status(500);
//       return next(err);
//     }
//     if (user) {
//       res.status(403);
//       return next(new Error("That username is already taken"));
//     }
//     const newUser = new User(req.body);
//     newUser.save((err, savedUser) => {
//       if (err) {
//         res.status(500);
//         return next(err);
//       }
//       // payload,            // secret
//       const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
//       return res.status(201).send({ token, user: savedUser.withoutPassword() });
//     });
//   });
// });

authRouter.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username }); // Find the user in the database
    if (!user) {
      res.status(403); // User not found
      return next(new Error("Incorrect username or password"));
    }

    // Use the `checkPassword` method to verify the password
    const isMatch = await user.checkPassword(req.body.password);
    if (!isMatch) {
      res.status(403); // Password mismatch
      return next(new Error("Incorrect username or password"));
    }

    // Generate JWT token
    const token = jwt.sign(
      { _id: user._id, username: user.username },
      process.env.SECRET,
      { expiresIn: "1h" } // Optional: token expiration
    );

    // Return user data (without the password) and the token
    return res.status(200).send({ user: user.withoutPassword(), token });
  } catch (error) {
    res.status(500);
    return next(error);
  }

  // User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
  //   if (err) {
  //     res.status(500);
  //     return next(err);
  //   }
  //   if (!user) {
  //     res.status(403);
  //     return next(new Error("Username or Password are incorrect"));
  //   }
  //   user.checkPassword(req.body.password, (err, isMatch) => {
  //     if (err) {
  //       res.status(403);
  //       return next(new Error("Username or Password are incorrect"));
  //     }
  //     if (!isMatch) {
  //       res.status(403);
  //       return next(new Error("Username or Password are incorrect"));
  //     }
  //     const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
  //     return res.status(200).send({ token, user: user.withoutPassword() });
  //   });
  // });
});

module.exports = authRouter;
