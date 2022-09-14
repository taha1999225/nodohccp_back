const router = require("express").Router();
const huileDevice = require("../controllers/huileDevice.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, huileDevice.create);
//get all
router.get("/getAll", auth, huileDevice.getAll);
//get one
router.post("/getbyId", auth, huileDevice.getbyId);
// delete one
router.post("/delete", auth, huileDevice.delete);
// update one
router.post("/update", auth, huileDevice.update);

module.exports = router;
