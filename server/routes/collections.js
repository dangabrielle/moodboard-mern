const express = require("express");
const router = express.Router();
const collectionsCtrl = require("../controllers/collections");

router.post("/", collectionsCtrl.create);
router.get("/", collectionsCtrl.index);

module.exports = router;
