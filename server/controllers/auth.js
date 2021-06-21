const mongoose = require("mongoose");
const User = require("../models/User");
const Joi = require("@hapi/joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).send("Email not found");
  }
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("!invalid password");
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
};

const verify = async (req, res) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("access denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    const user = await User.findOne({ _id: verified._id });
    if (user) return res.status(201).send(user.name);
    else return res.status(401).send("not found");
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
exports.login = login;
exports.register = register;
exports.verify = verify;
