const router = require("express").Router();
const cleanPlaneDetails = require("../controllers/cleanPlaneDetails.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, cleanPlaneDetails.create);
//get all
router.get("/getAll", auth, cleanPlaneDetails.getAll);
//get one
router.post("/getbyId", auth, cleanPlaneDetails.getbyId);
// delete one
router.post("/delete", auth, cleanPlaneDetails.delete);
// update one
router.post("/update", auth, cleanPlaneDetails.update);

module.exports = router;
