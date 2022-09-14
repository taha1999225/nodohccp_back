const router = require("express").Router();
const zone = require("../controllers/zone.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, zone.create);
//get all
router.get("/getAll", auth, zone.getAll);
//get one
router.post("/getbyId", auth, zone.getbyId);
// delete one
router.post("/delete", auth, zone.delete);
// update one
router.post("/update", auth, zone.update);

module.exports = router;
