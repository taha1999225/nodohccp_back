const router = require("express").Router();
const zoneDetails = require("../controllers/zoneDetails.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, zoneDetails.create);
//get all
router.get("/getAll", auth, zoneDetails.getAll);
//get one
router.post("/getbyId", auth, zoneDetails.getbyId);
// delete one
router.post("/delete", auth, zoneDetails.delete);
// update one
router.post("/update", auth, zoneDetails.update);

module.exports = router;
