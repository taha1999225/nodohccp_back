const router = require("express").Router();
const historyTemp = require("../controllers/historyTemp.controller");
const auth = require("../middlewares/auth");

// create
router.post("/create", auth, historyTemp.create);
//get all
router.get("/getAll", auth, historyTemp.getAll);
//get one
router.post("/getbyId", auth, historyTemp.getbyId);
// delete one
router.post("/delete", auth, historyTemp.delete);
// update one
router.post("/update", auth, historyTemp.update);

module.exports = router;
