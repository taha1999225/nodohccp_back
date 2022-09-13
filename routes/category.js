const router = require("express").Router();
const category = require("../controllers/category.controller");
const auth = require("../middlewares/auth");

//get all
router.get("/getAll", auth, category.getAll);

module.exports = router;
