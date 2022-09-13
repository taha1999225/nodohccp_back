const router = require("express").Router();
const shift = require("../controllers/shift.controller");
const auth = require("../middlewares/auth");

//get all
router.get("/getAll", auth, shift.getAll);

module.exports = router;
