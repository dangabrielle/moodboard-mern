const express = require("express");
const router = express.Router();
const dalleCtrl = require("../controllers/dalle.js");

router.get("/", dalleCtrl.test);
router.post("/", dalleCtrl.create);

module.exports = router;
