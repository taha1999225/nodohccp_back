const router = require("express").Router();
const devices = require("../controllers/devices.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, devices.create);
//get all
router.get("/getAll", auth, devices.getAll);
//get one
router.post("/getbyId", auth, devices.getbyId);
// delete one
router.post("/delete", auth, devices.delete);
// update one
router.post("/update", auth, devices.update);

module.exports = router;
