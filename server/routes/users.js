const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/users");

router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.login);
router.get("/login", usersCtrl.login);
router.get("/check-token", usersCtrl.checkToken);
router.get("/test", (req, res) => {
  res.send("testing233e");
});

module.exports = router;
