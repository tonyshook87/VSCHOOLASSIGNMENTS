const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  memberSince: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Pre-save hook to hash the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    // Hash the password with bcrypt (10 salt rounds by default)
    const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare hashed passwords during login
userSchema.methods.checkPassword = async function (passwordAttempt) {
  try {
    return await bcrypt.compare(passwordAttempt, this.password);
  } catch (err) {
    throw new Error("Error comparing passwords");
  }
};

// Method to exclude the password field from the user object in responses
userSchema.methods.withoutPassword = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model("User", userSchema);
