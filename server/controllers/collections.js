const User = require("../models/user");
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

async function create(req, res) {
  try {
    const { name, prompt, photo } = req.body;
    const imgUrl = await cloudinary.uploader.upload(photo);
    console.log("cloudinary url", imgUrl);
    const foundUser = await User.findById(req.headers.user);
    console.log("user found", foundUser);
    foundUser.collections.push({ name, prompt, photo: imgUrl.url });
    await foundUser.save();

    res
      .status(200)
      .json({ message: "Collection added successfully", data: foundUser });
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
