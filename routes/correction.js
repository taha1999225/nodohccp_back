const router = require("express").Router();
const correction = require("../controllers/correction.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, correction.create);
//get all
router.post("/getAll", auth, correction.getAll);
//get one
router.post("/getbyId", auth, correction.getbyId);
// delete one
router.post("/delete", auth, correction.delete);
// update one
router.post("/update", auth, correction.update);

module.exports = router;
