const router = require("express").Router();
const cleanPlane = require("../controllers/cleanPlane.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, cleanPlane.create);
//get all
router.get("/getAll", auth, cleanPlane.getAll);
//get one
router.post("/getbyId", auth, cleanPlane.getbyId);
// delete one
router.post("/delete", auth, cleanPlane.delete);
// update one
router.post("/update", auth, cleanPlane.update);

module.exports = router;
