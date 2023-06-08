const User = require("../models/user");

async function create(req, res) {
  try {
    // console.log("req", req);
    const foundUser = await User.findById(req.headers.user);
    console.log("user found", foundUser);
    foundUser.collections.push(req.body);
    await foundUser.save();

    res
      .status(200)
      .json({ message: "Collection added successfully", foundUser });
  } catch (error) {
    console.error("Error saving data:", error);
    res.sendStatus(500);
  }
}

async function index(req, res) {
  try {
    const foundUser = await User.findById(req.headers.user);
    console.log("user", foundUser);
    const collections = foundUser.collections;
    console.log("collections", collections);
    res.status(200).json({ data: collections });
  } catch (error) {
    console.error("Error saving data:", error);
    res.sendStatus(500);
  }
}

module.exports = {
  create,
  index,
};