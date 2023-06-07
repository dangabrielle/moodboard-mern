const express = require("express");
const router = express.Router();
const collectionsCtrl = require("../controllers/collections");

router.post("/", collectionsCtrl.create);

module.exports = router;
